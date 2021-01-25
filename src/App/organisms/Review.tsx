import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import ReviewCard from '../molecules/ReviewCard';
import ReviewInput from '../molecules/ReviewInput'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 

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

  const getReviewList = async () => {
    const reviewList = await server.get(`/reviews/list/${drinkId}`); 
    const { data }: any = reviewList; 

    setReviews(data.reviews); 
  }

  useEffect(() => {
    getReviewList(); 
  }, []); 

  const updateReviews = (data: any) => {
    setReviews(data);
  }

  return (
    <StyleReview>
      <p>리뷰</p>
      <StyleReviewCard>
        {!reviews.length ? <div style={{ width: "100%" }}>첫 리뷰를 작성해주세요.</div> : 
          reviews.map(review => {
            return <ReviewCard key={review.id} review={review} updateReviews={updateReviews} drinkId={drinkId} />
          })
        }
      </StyleReviewCard>
      <ReviewInput drinkId={drinkId} updateReviews={updateReviews} />
    </StyleReview>
  )

}

export default Review; 