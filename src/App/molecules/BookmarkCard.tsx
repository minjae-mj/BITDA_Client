import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BtnBookmark, { StyleBtnBookmarkReverse } from '../atoms/BtnBookmark'; 

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
      <StyleContent>
        <StyleImage src={drinkImage} alt="Drink Image" />
        <StyleText>{drinkName}</StyleText>
      </StyleContent>
      {!hover ? <></> : 
        <StyleHoverCard>     
          <BtnBookmark handleClick={handleRemoveBookmark} text="북마크 삭제" />
          <StyleBtnBookmarkReverse> 상세보기
            <Link to={`/drinks/detail/${drink.id}`} />
          </StyleBtnBookmarkReverse>
        </StyleHoverCard>
      }
    </StyleBookmarkCard>
  )
}

export default BookmarkCard; 

const StyleBookmarkCard = styled.div` // flex-item;
  position: relative; 
  flex-basis: 22%; 
  padding: 1rem; 
  margin: 1rem;
  height: 25rem; 

  border: 1px solid pink;
`
const StyleContent = styled.div`
  display: flex; 
  flex-direction: column;   
  align-items: center;  
`
const StyleHoverCard = styled.div`
  position: absolute; 
  top: 0; 
  left: 0; 
  width: 100%; 
  height: 100%; 
  color: white;
  font-weight: bold; 
  background-color:rgba(244, 244, 244, 0.6);

  display: flex; 
  justify-content: center;
  align-items: center; 
`
const StyleImage = styled.img`
  width: 20rem; 
  height: 20rem; 
  margin-bottom: 8px; 
  border: 1px solid gold; 
`
const StyleText = styled.p`
  font-size: 1.4rem; 
  text-align: center; 
`