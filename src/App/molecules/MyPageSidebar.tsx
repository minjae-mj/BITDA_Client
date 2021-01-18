import React from 'react'; 
import styled from 'styled-components'; 

const StyleMyPageSidebar = styled.div`
  display: flex; 
  flex-direction: column; 

  background-color: lightyellow; 
`

const MyPageSidebar = (): JSX.Element => {
  
  return (
    <StyleMyPageSidebar>
      <div>내 취향 전통주</div>
      <div>프로필 수정</div>
    </StyleMyPageSidebar>
  )
}

export default MyPageSidebar; 