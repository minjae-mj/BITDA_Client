import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReviewCard from '../molecules/ReviewCard';
import ReviewInput from '../molecules/ReviewInput';
import styled from 'styled-components';
import server from '../../apis/server';
import { RootState } from '../../reducers';
import { useSelector, useDispatch } from 'react-redux';
import { updateReviews } from '../../actions';
import LeftArrow from '../atoms/LeftArrow';
import RightArrow from '../atoms/RightArrow';

interface Params {
  drinkId: string;
}

const Review = () => {
  const { drinkId }: Params = useParams();
  const [idx, setIdx] = useState(0);
  const [reviewLength, setReviewLength] = useState(4);
  let state = useSelector(
    (state: RootState) => state.reviewListReducer.reviewList
  );
  const dispatch = useDispatch();

  const getReviewList = async () => {
    const reviewList = await server.get(`/reviews/list/${drinkId}`);
    const { data }: any = reviewList;
    dispatch(updateReviews(data.reviews));
  };

  useEffect(() => {
    getReviewList();
  }, [reviewLength]);

  window.addEventListener('resize', () => {
    let width = document.body.clientWidth;
    if (width < 1440) {
      setReviewLength(3);
    } else if (width > 1440) {
      setReviewLength(4);
    }
  });
  let fourReviews = state.slice(idx, idx + reviewLength);
  let nextReviewsHandler = () => {
    if (idx + reviewLength < state.length) {
      setIdx((pre) => pre + reviewLength);
    } else {
      return;
    }
  };
  let preReviewsHandler = () => {
    if (idx - reviewLength >= 0) {
      setIdx((pre) => pre - reviewLength);
    } else {
      return;
    }
  };

  const [leftHover, setLeftHover] = useState(false);
  const [rightHover, setRightHover] = useState(false);
  return (
    <StyleReview>
      <StyleText>리뷰</StyleText>
      <StyleReviewList>
        <div
          onMouseEnter={() => setLeftHover(true)}
          onMouseLeave={() => setLeftHover(false)}
        >
          <LeftArrow
            handleClick={preReviewsHandler}
            fill={leftHover ? '#ED6663' : '#C4C4C4'}
          />
        </div>
        <StyleReviewCard>
          {!state.length ? (
            <StyleNoReivew>첫 리뷰를 작성해주세요.</StyleNoReivew>
          ) : (
            fourReviews.map((review) => {
              return (
                <ReviewCard key={review.id} review={review} drinkId={drinkId} />
              );
            })
          )}
        </StyleReviewCard>
        <div
          onMouseEnter={() => setRightHover(true)}
          onMouseLeave={() => setRightHover(false)}
        >
          <RightArrow
            handleClick={nextReviewsHandler}
            fill={rightHover ? '#ED6663' : '#C4C4C4'}
          />
        </div>
      </StyleReviewList>
      <div>
        <ReviewInput drinkId={drinkId} />
      </div>
    </StyleReview>
  );
};

export default Review;

const StyleReview = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10rem auto;
`;
const StyleText = styled.p`
  font-size: 2rem;
  color: var(--color-primary);
`;
const StyleReviewList = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 28rem;
  margin-top: 2rem;
`;
const StyleReviewCard = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  align-items: center;
`;
const StyleNoReivew = styled.div`
  width: 100%;
  font-size: 1.8rem;
  color: var(--color-primary);
  text-align: center;
`;
