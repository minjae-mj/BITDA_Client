import React from 'react'; 
import ReviewCard from '../molecules/ReviewCard';
import ReviewInput from '../molecules/ReviewInput'; 
import styled from 'styled-components'; 

const StyleReviewCard = styled.div`
  display: flex; 
  justify-content: space-around; 
`

const Review = () => {

  return (
    <div>
      <p>리뷰</p>
      <StyleReviewCard>
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </StyleReviewCard>
      <ReviewInput />
    </div>
  )

}

export default Review; 