import React from 'react'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import styled from 'styled-components'; 
import StarIcon from '../atoms/StarIcon'; 
import axios from 'axios'; 

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
  updateReviews: (data: any) => void;
}

const StyleReviewCard = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 20%; 
  height: 15rem; 
  padding: .5rem 1rem; 

  border: none; 
  box-shadow: 2px 3px 3px #FBC99D;
`

const StyleUserImage = styled.div`
  border-radius: 50%; 
`

const StyleUser = styled.div`
  display: flex; 
  width: 100%;  
  justify-content: space-between; 
`

const ReviewCard = ({ drinkId, review, updateReviews }: Props) => {
  const state = useSelector((state: RootState) => state.signinReducer); 
  const { accessToken } = state; 

  const { id, text, rating, user } = review; 
  const { userName, userImage } = user; 

  const handleRemoveReivew = async () => {
    await axios({
      url: `http://localhost:8080/reviews/remove`,
      method: 'delete',
      data: { reviewId : id },
      headers: { Authorization: `bearer ${accessToken}` },
    });

    const reviewList = await axios.get(`http://localhost:8080/reviews/list/${drinkId}`); 
    const { data }: any = reviewList;  
    updateReviews(data.reviews); 
  }

  return (
    <StyleReviewCard>
      <StyleUser>
        <StyleUserImage>
          <img src={userImage} width="100px" height="100px" />
        </StyleUserImage>
        <span>{userName}</span>
        <span><StarIcon fill="yellow" /></span>
        <span>{rating}</span>
        <span onClick={handleRemoveReivew}>X</span>
      </StyleUser>
      <p>{text}</p>
    </StyleReviewCard>
  ); 
}

export default ReviewCard; 



