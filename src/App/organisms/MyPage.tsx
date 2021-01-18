import React, { useState } from 'react'; 
import MyPageSidebar from '../molecules/MyPageSidebar'; 
import MyPageBookmark from './MyPageBookmark'; 
import MyPageProfile from './MyPageProfile'; 
import styled from 'styled-components'; 

const StyleMyPage = styled.div`
  width: 100%;
  height: 80vh; 
  display: flex; 
`

const MyPage = (): JSX.Element => {
  const [page, setPage] = useState('bookmark'); 
  
  return (
    <StyleMyPage>
      <MyPageSidebar />
      {page === 'bookmark' ? <MyPageBookmark /> : <MyPageProfile />}
    </StyleMyPage>
  )
}

export default MyPage; 