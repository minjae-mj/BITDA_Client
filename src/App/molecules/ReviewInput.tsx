import React, { useState } from 'react'; 
import RatingIcon from '../molecules/RatingIcon'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BtnWithEvent from '../atoms/BtnWithEvent';
import { useDispatch } from 'react-redux';
import { updateReviews } from '../../actions'; 

interface Props {
  drinkId: string; 
  updateReviews?: (data: any) => void;
}

const ReviewInput = ({ drinkId }: Props) => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken')

  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0); 
  const [hoverRating, setHoverRating] = useState(0); 

  const onMouseEnter = (index: number) => setHoverRating(index); 
  const onMouseLeave = () => setHoverRating(0); 
  const onSaveRating = (index: number) => setRating(index); 

  const handleInput = (e: any): void => {
    const value = e.target.value; 
    setReviewText(value); 
  }

  const handleSubmit = async (e: any) => {
    const review = await server.post('/reviews/add', {
        rating, 
        text: reviewText,
        drinkId
      }, 
      { headers: {'Authorization': `Bearer ${accessToken}` }
    }); 

    const reviewList = await server.get(`/reviews/list/${drinkId}`); 
    const { data }: any = reviewList;  
    dispatch(updateReviews(data.reviews));

    setRating(0);
    const textArea: any = document.querySelector('#textArea')
    textArea.value = ""; 
  }

  return (
   <>
     <StyleReviewLabel>
        <StyleText>나의 별점</StyleText>
        <StyleRatingIcon>
          {
            [1, 2, 3, 4, 5].map(index => {
              return (
                <RatingIcon 
                  index={index} 
                  rating={rating} 
                  hoverRating={hoverRating}
                  onMouseEnter={onMouseEnter} 
                  onMouseLeave={onMouseLeave} 
                  onSaveRating={onSaveRating} />
              ) 
            })
          }
        </StyleRatingIcon>
     </StyleReviewLabel>
     <StyleTextarea id='textArea' style={{
          width: "70%",
          height: "30vh",
        }} onChange={handleInput} />
     <BtnWithEvent text="나의 리뷰 등록" handleSubmit={handleSubmit} />
   </>
  )
}

export default ReviewInput; 

const StyleReviewLabel = styled.div`
  display: flex; 
  align-items: center; 
  margin-top: 4rem;  
`

const StyleRatingIcon = styled.div`
  display: flex; 
  align-items: center; 
  margin-left: 1rem; 
`

const StyleText = styled.p`
  font-size: 2rem; 
  color: var(--color-primary);
`

const StyleTextarea = styled.textarea`
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  margin: 1rem auto; 
`