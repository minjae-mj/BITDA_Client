import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import ReviewCard from '../molecules/ReviewCard';
import ReviewInput from '../molecules/ReviewInput'; 
import styled from 'styled-components'; 
import axios from 'axios'; 
import dummyReviews from './dummyReviews'; 

interface Params {
  drinkId: string; 
}

interface Reviews {
  id: number;
  text: string;
  rating: number;
  user: {
      id: number;
      userName: string;
      userImage: string;
  }
}

const StyleReview = styled.div`
  display: flex;
  flex-direction: column;  
  width: 80%; 
  
  margin: 1rem auto; 
`

const StyleReviewCard = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: space-between; 
`

const Review = () => {
  const { drinkId }: Params = useParams(); 
  const [reviews, setReviews] = useState<Reviews[]>([]); 

  const getReviewList = () => {
    // const reviewList = axios.get('http://localhost:8080/reviews/list', { 
    //   data: {
    //     drinkId
    //   }
    // }); 
    
    // setReviews(reviewList); 
    setReviews(dummyReviews); 
  }

  useEffect(() => {
    getReviewList(); 
  }, [reviews])


  return (
    <StyleReview>
      <p>리뷰</p>
      <StyleReviewCard>
        {!reviews ? <div style={{ width: "100%" }}>첫 리뷰를 작성해주세요.</div> : 
          reviews.map(review => {
            return <ReviewCard key={review.id} review={review} />
          })
        }
      </StyleReviewCard>
      <ReviewInput drinkId={drinkId} />
    </StyleReview>
  )

}

export default Review; 