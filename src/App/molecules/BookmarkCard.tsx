import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components'; 

const StyleBookmarkCard = styled.div`
 flex-basis: 20%; 
 padding: 2rem; 
 margin: 1rem;

 background-color: gold;  
`

const BookmarkCard = (): JSX.Element => {
  
  return (
    <StyleBookmarkCard>
      <div>이미지</div>
      <Link to="/drinks/detail/2">전통주 이름</Link>
    </StyleBookmarkCard>
  )
}

export default BookmarkCard; 