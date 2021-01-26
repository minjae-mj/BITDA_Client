import React, { useState, useEffect } from 'react'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BookmarkCard from '../molecules/BookmarkCard'; 

interface Bookmark {
  id: number; // 북마크 아이디
  drink: {
    id: number; 
    drinkName: string; 
    drinkImage: string; 
  }
}

const StyleMyPageBookmark = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

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
      {!bookmarkList.length ? "북마크에 내 취향 전통주를 담아보세요." : 
        bookmarkList.map(bookmark => {
          return <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        })
      }
    </StyleMyPageBookmark>
  )
}

export default MyPageBookmark; 