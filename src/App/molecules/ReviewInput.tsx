import React, { useState } from 'react';
import RatingIcon from '../molecules/RatingIcon';
import styled from 'styled-components';
import server from '../../apis/server';
import { useDispatch } from 'react-redux';
import { updateReviews } from '../../actions';
import BtnWithEvent from '../atoms/BtnWithEvent';

interface Props {
  drinkId: string;
  updateReviews?: (data: any) => void;
}

const ReviewInput = ({ drinkId }: Props) => {
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  const [reviewText, setReviewText] = useState('');
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const onMouseEnter = (index: number) => setHoverRating(index);
  const onMouseLeave = () => setHoverRating(0);
  const onSaveRating = (index: number) => setRating(index);

  const handleInput = (e: any): void => {
    const value = e.target.value;
    setReviewText(value);
  };

  const textArea: any = document.querySelector('#textArea');

  const handleSubmit = async (e: any) => {
    if (!accessToken) {
      alert('로그인 해 주세요.');
    } else {
      if (!reviewText.length) {
        alert('리뷰 내용을 입력해주세요.');
        return;
      }
      const review = await server.post(
        '/reviews/add',
        {
          rating,
          text: reviewText,
          drinkId,
        },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      );
      setReviewText('');
      const reviewList = await server.get(`/reviews/list/${drinkId}`);
      const { data }: any = reviewList;
      dispatch(updateReviews(data.reviews));

      setRating(0);
      textArea.value = '';
    }
  };

  const handleClickTextarea = () => {
    if (!accessToken) {
      alert('로그인 해 주세요.');
    }
  };

  return (
    <>
      <StyleReviewLabel>
        <StyleText>나의 별점</StyleText>
        <StyleRatingIcon>
          {[1, 2, 3, 4, 5].map((index) => {
            return (
              <RatingIcon
                index={index}
                rating={rating}
                hoverRating={hoverRating}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onSaveRating={onSaveRating}
              />
            );
          })}
        </StyleRatingIcon>
      </StyleReviewLabel>
      <StyleReviewInput>
        {accessToken ? (
          <StyleTextarea
            id="textArea"
            maxLength={100}
            onChange={handleInput}
            onClick={handleClickTextarea}
            placeholder="리뷰를 100자 이내로 남겨주세요."
          />
        ) : (
          <StyleTextarea
            id="textArea"
            maxLength={0}
            onChange={handleInput}
            onClick={handleClickTextarea}
            placeholder="로그인을 진행해주세요."
          />
        )}

        <StyleReviewRegister>
          <StyleEmptyDiv>
            <BtnWithEvent text="나의 리뷰 등록" handleSubmit={handleSubmit} />
          </StyleEmptyDiv>
        </StyleReviewRegister>
      </StyleReviewInput>
    </>
  );
};

export default ReviewInput;

const StyleReviewLabel = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10rem;
`;
const StyleRatingIcon = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;
const StyleText = styled.p`
  font-size: 2rem;
  color: var(--color-primary);
`;
const StyleReviewInput = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyleTextarea = styled.textarea`
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  margin: 1rem auto;
  padding: 1.8rem 1.8rem;
  background-color: transparent;
  font-size: 1.8rem;
  width: 100%;
  height: 16vh;
  resize: none;

  &::placeholder {
    font-size: 1.8rem;
    line-height: 1.6;
  }

  &:focus {
    outline: none;
  }
`;
const StyleReviewRegister = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
const StyleEmptyDiv = styled.div`
  display: flex;
  width: 30rem;
  justify-content: flex-end;
`;
