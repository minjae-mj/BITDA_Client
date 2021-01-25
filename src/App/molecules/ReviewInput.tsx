import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import RatingIcon from '../molecules/RatingIcon'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BtnWithEvent from '../atoms/BtnWithEvent';

interface Props {
  drinkId: string; 
  updateReviews: (data: any) => void;
}

const StyleReviewLabel = styled.div`
  display: flex; 
  align-items: center; 
`

const StyleRatingIcon = styled.div`
  display: flex; 
  align-items: center; 
  margin-left: 1rem; 
`

const ReviewInput = ({ drinkId, updateReviews }: Props) => {
  const state = useSelector((state: RootState) => state.signinReducer); 
  const { accessToken } = state; 

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
    updateReviews(data.reviews); 
  }

  return (
   <>
     <StyleReviewLabel>
      <p>나의 별점</p>
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
     <textarea style={{
          width: "70%",
          height: "30vh",
        }} onChange={handleInput}></textarea>
     <BtnWithEvent text="나의 리뷰 등록" handleSubmit={handleSubmit} />
   </>
  )
}

export default ReviewInput; 

