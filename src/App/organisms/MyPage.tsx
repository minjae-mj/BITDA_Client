import React, { useState } from 'react'; 
import MyPageSidebar from '../molecules/MyPageSidebar'; 
import MyPageBookmark from './MyPageBookmark'; 
import MyPageProfile from './MyPageProfile'; 
import MyPageAddDrink from './MyPageAddDrink'; 
import styled from 'styled-components'; 

const StyleMyPage = styled.div`
  height: 100vh; 
  display: flex; 
`

const MyPage = (): JSX.Element => {
  const [page, setPage] = useState('bookmark'); 

  const handleClick = (e: any) => {
    const target = e.target.value; 
    setPage(target); 
  }
  
  return (
    <StyleMyPage>
      <MyPageSidebar handleClick={handleClick} />
      {page === 'bookmark' && <MyPageBookmark /> }
      {page === 'myProfile' && <MyPageProfile /> }
      {page === 'addDrink' && <MyPageAddDrink /> }
    </StyleMyPage>
  )
}

export default MyPage; 