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
          <span style={{ marginRight: '8px' }}><StarIcon fill="yellow" /></span>
          <span>{rating}</span>
          {state.user.id === user.id ? <span onClick={handleRemoveReivew}>X</span> : ""}
        </StyleRating>
      </StyleUser>
      <StyleText>{text}</StyleText>
    </StyleReviewCard>
  ); 
}

export default ReviewCard; 


const StyleReviewCard = styled.div`
  width: 25%; 
  padding: 1.8rem 1.5rem; 
  margin: 1rem .5rem; 
  border-radius: 5px; 

  box-shadow: 1px 3px 5px #ddadaf;
  //border: 1px solid var(--color-primary); 
`

const StyleUser = styled.div`
  display: flex; 
  width: 100%;  
  justify-content: space-around; 
  align-items: center; 
  font-size: 1.4rem; 
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
  display: flex; 
  align-items: center; 
  justify-content: space-between; 

  // border: 1px solid blue; 
`


