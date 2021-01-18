import React from 'react'; 
import MyPage from '../organisms/MyPage'; 
import styled from 'styled-components'; 

const StyleMyPageTemplate = styled.div`
  width: 100%;
  height: 80vh; 
`
const MyPageTemplate = (): JSX.Element => {
  
  return (
    <StyleMyPageTemplate>
      <MyPage />
    </StyleMyPageTemplate>
  )
}

export default MyPageTemplate; 