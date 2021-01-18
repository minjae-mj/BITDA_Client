import React from 'react'; 
import DetailColoredBtn from '../atoms/DetailColoredBtn';
import styled from 'styled-components'; 

const StyleReviewLabel = styled.div`
  display: flex; 
  align-items: center; 
`

const ReviewInput = () => {

  return (
   <div>
     <StyleReviewLabel>
      <p>나의 별점</p>
      <div>
        <span>별</span>
        <span>별</span>
        <span>별</span>
        <span>별</span>
        <span>별</span>
      </div>
     </StyleReviewLabel>
     <textarea style={{
          width: "70%",
          height: "30vh",
        }}></textarea>
     <DetailColoredBtn text="나의 리뷰 등록" />
   </div>
  )
}

export default ReviewInput; 