import React, { useState } from 'react'; 
import MyPageSidebar from '../molecules/MyPageSidebar'; 
import MyPageBookmark from './MyPageBookmark'; 
import MyPageProfile from './MyPageProfile'; 
import MyPageAddDrink from './MyPageAddDrink'; 
import styled from 'styled-components'; 
import backgroundImg from '../../images/background.png'

const StyleMyPage = styled.div`
  height: 100vh; 
  display: flex; 
`
const StyleMyPageContent = styled.div`
  width: 100%; 
  padding: 8rem 10rem; 

  // background-image: url(${backgroundImg});
  // background-size: cover;
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
      <StyleMyPageContent>
        {page === 'bookmark' && <MyPageBookmark /> }
        {page === 'myProfile' && <MyPageProfile /> }
        {page === 'addDrink' && <MyPageAddDrink /> }
      </StyleMyPageContent>
    </StyleMyPage>
  )
}

export default MyPage; 