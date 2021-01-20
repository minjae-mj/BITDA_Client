import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import RatingIcon from '../molecules/RatingIcon'; 
import styled from 'styled-components'; 
import axios from 'axios'; 
import BtnWithEvent from '../atoms/BtnWithEvent';

interface Props {
  drinkId: string; 
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

const ReviewInput = ({ drinkId }: Props) => {
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

  const handleSubmit = (e: any): void => {
    axios.post('http://localhost:8080/reviews/add', {
      headers: {'Authorization': `Bearer ${accessToken}` },
      data: {
        rating, 
        text: reviewText,
        drinkId
      }
    }); 
    
    // 리뷰 등록 성공 후, 리뷰 리스트 다시 렌더링
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

