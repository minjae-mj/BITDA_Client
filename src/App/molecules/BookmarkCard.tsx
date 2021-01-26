import React, { useState } from 'react'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import { StyleBtnWithEvent } from '../atoms/BtnWithEvent'; 
import BtnPlain from '../atoms/BtnPlain'; 

interface Props {
  bookmark: {
    id: number; 
    drinkName: string; 
    drinkImage: string; 
  }
}

const StyleBookmarkCard = styled.div`
  position: relative; 
  flex-basis: 20%; 
  padding: 2rem; 
  margin: 1rem;

  background-color: gold;  
`
const StyleHoverCard = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  color: white;
  font-weight: bold; 
  background-color:rgba(0, 0, 0, 0.6);

  display: flex; 
  justify-content: center;
  align-items: center; 
`

const BookmarkCard = ({ bookmark }: Props): JSX.Element => {
  const state = useSelector((state: RootState) => state.signinReducer); 
  const { accessToken } = state; 
  const { id, drinkName, drinkImage } = bookmark; 
  const [hover, setHover] = useState(false); 

  const onMouseEnter = () => setHover(true); 
  const onMouseLeave = () => setHover(false); 

  const handleRemoveBookmark = () => {
    server.get('/drinks/unlike', { 
      headers: {
        Authorization: `Bearer ${accessToken}`
      },
      data: {
        drinkId: id
      }
    });

    console.log('북마크삭제')
  }

  return (
    <StyleBookmarkCard onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div>
        <img src={drinkImage} alt="Drink Image" width="100%" />
        <div>{drinkName}</div>
      </div>
      {!hover ? <></> : 
        <StyleHoverCard>     
          <BtnPlain handleClick={handleRemoveBookmark} text="북마크 삭제" />
          <StyleBtnWithEvent> 
            <Link to={`/drinks/detail/${id}`}>상세보기</Link>
          </StyleBtnWithEvent>
        </StyleHoverCard>
      }
    </StyleBookmarkCard>
  )
}

export default BookmarkCard; 