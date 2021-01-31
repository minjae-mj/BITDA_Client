import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BookmarkCard from '../molecules/BookmarkCard'; 

interface Bookmark {
  id: number; 
  drink: {
    id: number; 
    drinkName: string; 
    drinkImage: string; 
  }
}

const MyPageBookmark = (): JSX.Element => {
  const accessToken = localStorage.getItem('accessToken'); 
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]); 

  useEffect(() => {
    const getBookmarkList = async () => {
      const bookmarks = await server.get('/users/bookmark', {
        headers: { 'Authorization': `Bearer ${accessToken}` },
      });

      const { data } = bookmarks; 
      setBookmarkList(data.drinks);  
    }

    getBookmarkList();  
  }, []); 
  
  return (
    <StyleMyPageBookmark>
      {!bookmarkList.length ? 
        <StyleText>북마크에 내 취향 전통주를 담아보세요.</StyleText>
        :bookmarkList.map(bookmark => {
          return <BookmarkCard key={bookmark.id} bookmark={bookmark} /> })}
    </StyleMyPageBookmark>
  )
}

export default MyPageBookmark;

const StyleMyPageBookmark = styled.div`
  display: flex; 
  flex-wrap: wrap; 
  justify-content: flex-start; 
  align-items: center;
`
const StyleText = styled.p`
  font-size: 1.7rem; 
  font-weight: bold; 
  margin-top: 25%; 
  
  color: var(--color-primary); 
`