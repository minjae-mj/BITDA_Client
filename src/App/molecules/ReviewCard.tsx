import React from 'react'; 
import styled from 'styled-components'; 

const StyleReviewCard = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 22%; 

  border: none; 
  box-shadow: 2px 3px 3px #FBC99D;
`

const StyleUser = styled.div`
  display: flex; 
`

const ReviewCard = () => {

  return (
    <StyleReviewCard>
      <StyleUser>
        <div>
          <img src="userImage"/>
        </div>
        <span>userName</span>
        <span>Star</span>
        <span>5</span>
      </StyleUser>
      <p>완전 맛있었어요. 재구매 하려고 장바구니에 담아놨습니다!</p>
    </StyleReviewCard>
  )
}

export default ReviewCard; 