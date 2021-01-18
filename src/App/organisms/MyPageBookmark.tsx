import React from 'react'; 
import styled from 'styled-components'; 
import BookmarkCard from '../molecules/BookmarkCard'

const StyleMyPageContent = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const MyPageContent = (): JSX.Element => {
  
  return (
    <StyleMyPageContent>
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
      <BookmarkCard />
    </StyleMyPageContent>
  )
}

export default MyPageContent; 