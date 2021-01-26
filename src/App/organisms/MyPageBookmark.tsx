import React, { useState, useEffect } from 'react'; 
import { useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import styled from 'styled-components'; 
import server from '../../apis/server'; 
import BookmarkCard from '../molecules/BookmarkCard'; 
import dummyBookmarks from './dummyBookmarks'; 

interface BookmarkList {
  id: number; 
  drinkName: string; 
  drinkImage: string; 
}

const StyleMyPageContent = styled.div`
  display: flex; 
  flex-wrap: wrap;
`

const MyPageContent = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.signinReducer); 
  const { accessToken } = state; 

  const [bookmarkList, setBookmarkList] = useState<BookmarkList[]>([]); 

  useEffect(() => {
    // const getBookmarkList = async () => {
    //   const bookmarks = await server.get('/users/bookmark', {
    //     headers: { 'Authorization': `Bearer ${accessToken}` },
    //   });

    //   const { data } = bookmarks; 
    //   setBookmarkList(data); 
    // }

    // getBookmarkList();  
    setBookmarkList(dummyBookmarks); 
  }, []); 
  
  return (
    <StyleMyPageContent>
      {!bookmarkList.length ? "북마크에 내 취향 전통주를 담아보세요." : 
        bookmarkList.map(bookmark => {
          return <BookmarkCard key={bookmark.id} bookmark={bookmark} />
        })
      }
    </StyleMyPageContent>
  )
}

export default MyPageContent; 