import React, { useState, useEffect } from 'react'; 
import { useParams } from "react-router-dom";
import ReviewCard from '../molecules/ReviewCard';
import ReviewInput from '../molecules/ReviewInput'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import { RootState } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { updateReviews } from '../../actions'; 

interface Params {
  drinkId: string; 
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
  const [idx , setIdx] = useState(0);

  let state = useSelector((state :RootState ) => state.reviewListReducer.reviewList);
  const dispatch = useDispatch();


  const getReviewList = async () => {
    const reviewList = await server.get(`/reviews/list/${drinkId}`); 
    const { data }: any = reviewList; 
    dispatch(updateReviews(data.reviews));
  }

  useEffect(() => {
    getReviewList(); 
  }, []); 

  let fourReviews = state.slice(idx, idx+4);
  let nextReviewsHandler = () => {
    if(idx + 4  < state.length ){
      setIdx(pre => pre + 4)
    }else{
      return;
    }
  }
  let preReviewsHandler = () => {
    if(idx - 4  >= 0 ){
      setIdx(pre => pre - 4)
    }else{
      return;
    }
  }

  return (
    <StyleReview>
      <p>리뷰</p>
      <button onClick={preReviewsHandler}>이전 리뷰 보기</button>
      <StyleReviewCard>
        {!state.length ? <div style={{ width: "100%" }}>첫 리뷰를 작성해주세요.</div> : 
          fourReviews.map(review => {
            return <ReviewCard key={review.id} review={review} drinkId={drinkId} />
          })
        }
      </StyleReviewCard>
      <button onClick={nextReviewsHandler}>다음 리뷰 보기</button>
      <ReviewInput drinkId={drinkId} />
    </StyleReview>
  )

}

export default Review; 