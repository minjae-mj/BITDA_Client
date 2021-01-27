import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import { StyleBtnWithEvent } from '../atoms/BtnWithEvent'; 
import BtnPlain from '../atoms/BtnPlain'; 

interface Props {
  bookmark: {
    id: number; // 북마크 아이디
    drink: {
      id: number; 
      drinkName: string; 
      drinkImage: string; 
    }
  }
}

const BookmarkCard = ({ bookmark }: Props): JSX.Element => {
  const { drink } = bookmark; 
  const { drinkName, drinkImage } = bookmark.drink; 
  const accessToken = localStorage.getItem('accessToken');  
  const [hover, setHover] = useState(false); 

  const onMouseEnter = () => setHover(true); 
  const onMouseLeave = () => setHover(false); 

  const handleRemoveBookmark = () => {
    server.post('/drinks/unlike',{ drinkId: drink.id }, { headers: { Authorization: `Bearer ${accessToken}`}}); 
    window.location.reload();
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
            <Link to={`/drinks/detail/${drink.id}`}>상세보기</Link>
          </StyleBtnWithEvent>
        </StyleHoverCard>
      }
    </StyleBookmarkCard>
  )
}

export default BookmarkCard; 

const StyleBookmarkCard = styled.div`
  position: relative; 
  flex-basis: 20%; 
  padding: 2rem; 
  margin: 1rem;
  height: 25rem; 

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