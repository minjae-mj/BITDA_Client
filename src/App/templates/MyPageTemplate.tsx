import React from 'react'; 
import MyPage from '../organisms/MyPage'; 
import styled from 'styled-components'; 

const StyleMyPageTemplate = styled.div`
  margin-top: 7.2rem; 
`
const MyPageTemplate = (): JSX.Element => {
  
  return (
    <StyleMyPageTemplate>
      <MyPage />
    </StyleMyPageTemplate>
  )
}

export default MyPageTemplate; 