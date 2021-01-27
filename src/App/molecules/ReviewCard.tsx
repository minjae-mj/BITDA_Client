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
    }
  },
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
      data: { reviewId : id },
      headers: { Authorization: `bearer ${accessToken}` },
    });

    const reviewList = await server.get(`/reviews/list/${drinkId}`); 
    const { data } = reviewList;  
    dispatch(updateReviews(data.reviews));
  }

  return (
    <StyleReviewCard>
      <StyleUser>
        <StyleUserImage>
          <div>
            <img style={{ borderRadius: '80%', marginRight: '8px' }} src={userImage} width="100px" height="100px" alt='' />
          </div>
          <span>{userName}</span>
        </StyleUserImage>
        <StyleRating>
          <span style={{ marginRight: '3px' }}><StarIcon fill="#ffdb58" /></span>
          <span>{rating}</span>
          
        </StyleRating>
      </StyleUser>
      <StyleText>{text}</StyleText>
      {state.user.id === user.id ? <StyleRemoveBtn onClick={handleRemoveReivew}>X</StyleRemoveBtn> : ""}
    </StyleReviewCard>
  ); 
}

export default ReviewCard; 


const StyleReviewCard = styled.div`
  position: relative; 
  width: 25%; 
  padding: 1.8rem 1.5rem; 
  margin: 1rem .5rem; 
  border-radius: 5px; 

  box-shadow: var(--box-shadow); 
`

const StyleUser = styled.div`
  position: relative; 
  display: flex; 
  width: 100%;  
  align-items: center; 
  font-size: 1.4rem; 
  margin-top: .8rem; 

  // border: 1px solid green; 
`
const StyleText = styled.p`
  margin-top: 2rem; 
  font-size: 1.8rem; 
`
const StyleUserImage = styled.div`
  display: flex; 
  align-items: center; 

  // border: 1px solid green; 
`
const StyleRating = styled.div`
  position: absolute; 
  top: 3px; 
  right: 7px; 
  display: flex; 
  align-items: center; 
  justify-content: space-between; 

  // border: 1px solid blue; 
`
const StyleRemoveBtn = styled.span`
  position: absolute; 
  top: 3px; 
  right: 3px; 
  font-size: 1.2rem; 
  color: var(--color-secondary) 
  border-radius: 50%; 
`

