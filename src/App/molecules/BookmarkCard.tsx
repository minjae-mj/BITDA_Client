import React, { useState } from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 

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
  const { id, drinkName, drinkImage } = bookmark; 
  const [hover, setHover] = useState(false); 

  const onMouseEnter = () => setHover(true); 
  const onMouseLeave = () => setHover(false); 

  const handleRemoveBookmark = () => {
    // 현재 북마크 제거 라우터 없음. 
    // 유저 검증 필요할까? user.id 보내야할까? 
    // axios.delete('http://localhost:8080/users/bookmark/remove', {
    //   headers: {'Authorization': `Bearer ${accessToken}` },
    //   data: {
    //     bookmarkId: id
    //   }
    // })
  }
  
  return (
    <StyleBookmarkCard onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div>
        <img src={drinkImage} alt="Drink Image" width="100%" />
        <div>{drinkName}</div>
      </div>
      {!hover ? <></> : 
        <StyleHoverCard>
          <div>
            <Link to={`/drinks/detail/${id}`}>상세보기</Link>
          </div>
          <div>
            북마크 삭제
          </div>
        </StyleHoverCard>
      }
    </StyleBookmarkCard>
  )
}

export default BookmarkCard; 