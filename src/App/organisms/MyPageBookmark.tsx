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

const MyPageBookmark = (): JSX.Element => {
  const accessToken = localStorage.getItem('accessToken'); 
  const [bookmarkList, setBookmarkList] = useState<Bookmark[]>([]); 

  useEffect(() => {
    server({
      method: 'get',
      url: `/users/bookmark`,
      headers: { Authorization: `Bearer ${accessToken}` }
    })
    .then(res => {
      setBookmarkList(res.data.drinks)
      console.log(bookmarkList); 
    }); 

    // const getBookmarkList = async () => {
    //   const bookmarks = await server.get('/users/bookmark', {
    //     headers: { 'Authorization': `Bearer ${accessToken}` },
    //   });

    //   const { data } = bookmarks; 
    //   setBookmarkList(data.drinks); 
    //   console.log(bookmarkList); 
    // }

    // getBookmarkList();  
    console.log(bookmarkList); 
  }, []); 
  
  return (
    <StyleMyPageBookmark>
      {!bookmarkList.length ? 
        <StyleText>북마크에 내 취향 전통주를 담아보세요.</StyleText>
        :bookmarkList.map(bookmark => {
          return (
          <StyleBookmarkCard key={bookmark.id}>
            <BookmarkCard key={bookmark.id} bookmark={bookmark} />
          </StyleBookmarkCard>
          );
        })
      }
    </StyleMyPageBookmark>
  )
}

export default MyPageBookmark;

const StyleMyPageBookmark = styled.div`
  // display: flex; 
  // justify-content: center; 
  // align-items: center;
  border: 1px solid blue; 
`

const StyleBackground = styled.div`
  // 여기만 백그라운드 적용? 
`
const StyleText = styled.p`
  font-size: 1.7rem; 
  font-weight: bold; 
  margin-top: 25%; 
  
  color: var(--color-primary); 
`
const StyleBookmarkCard = styled.div`
  display: flex; 
  flex-wrap: wrap;
  height: 100vh; 
  border: 1px solid pink; 
`