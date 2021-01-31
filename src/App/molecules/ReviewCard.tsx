import React from 'react';
import { RootState } from '../../reducers';
import styled from 'styled-components';
import StarIcon from '../atoms/StarIcon';
import server from '../../apis/server';
import { useSelector, useDispatch } from 'react-redux';
import { updateReviews } from '../../actions';

interface Props {
  drinkId: string;
  review: {
    id: number;
    text: string;
    rating: number;
    user: {
      id: number;
      userName: string;
      userImage: string;
    };
  };
}

const ReviewCard = ({ drinkId, review }: Props) => {
  const { id, text, rating, user } = review;
  const { userName, userImage } = user;
  const state = useSelector((state: RootState) => state.signinReducer);
  const dispatch = useDispatch();
  const accessToken = localStorage.getItem('accessToken');

  const handleRemoveReivew = async () => {
    await server({
      url: `/reviews/remove`,
      method: 'delete',
      data: { reviewId: id },
      headers: { Authorization: `bearer ${accessToken}` },
    });

    const reviewList = await server.get(`/reviews/list/${drinkId}`);
    const { data } = reviewList;
    dispatch(updateReviews(data.reviews));
  };

  return (
    <StyleReviewCard>
      <StyleRating>
        <span style={{ marginRight: '3px' }}>
          <StarIcon fill="#ffdb58" />
        </span>
        <span>{rating}</span>
      </StyleRating>
      <StyleUser>
        <StyleUserImage>
          <div>
            <img
              style={{ borderRadius: '80%', marginRight: '1.2rem' }}
              src={userImage}
              width="65px"
              height="65px"
              alt="user_image"
            />
          </div>
          <span>{userName}</span>
        </StyleUserImage>
      </StyleUser>
      <StyleText>{text}</StyleText>
      {state.user.id === user.id ? (
        <StyleRemoveBtn onClick={handleRemoveReivew}>
          <StyleBin className="fas fa-trash-alt" />
        </StyleRemoveBtn>
      ) : (
        ''
      )}
    </StyleReviewCard>
  );
};

export default ReviewCard;

const StyleReviewCard = styled.div`
  position: relative;
  width: 25rem;
  height: 33rem;
  padding: 1.8rem 1.5rem;
  margin: 1rem 1.6rem;
  border-radius: 5px;

  box-shadow: var(--box-shadow);
`;

const StyleUser = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  font-size: 1.4rem;
  margin-top: 2rem;
  margin-bottom: 2.5rem;
  font-family: 'sans-serif';
  color: #58595b;
`;
const StyleText = styled.p`
  margin-top: 2rem;
  font-size: 1.6rem;
  font-family: 'sans-serif';
  color: #58595b;
  @media screen and (max-width: 1500px) {
    font-size: 1.4rem;
  }
`;
const StyleUserImage = styled.div`
  display: flex;
  align-items: center;
`;
const StyleRating = styled.div`
  position: absolute;
  top: 2.5rem;
  right: 1.3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5rem;
  color: #808080;
`;
const StyleRemoveBtn = styled.span`
  position: absolute;
  top: 3px;
  right: 3px;
  font-size: 1.2rem;
  color: var(--color-secondary);
  border-radius: 50%;
`;
const StyleBin = styled.i`
  color: #c4c3d0;
  font-size: 1.5rem;
  margin: 8px 8px;
  cursor: pointer;
`;
