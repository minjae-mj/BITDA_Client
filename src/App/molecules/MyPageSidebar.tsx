import React from 'react'; 
import styled from 'styled-components'; 

interface Props {
  handleClick: (e: any) => void; 
}

const StyleMyPageSidebar = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 25%;

  background-color: lightyellow; 
`

const MyPageSidebar = ({ handleClick }: Props): JSX.Element => {

  return (
    <StyleMyPageSidebar>
      <button value="bookmark" onClick={handleClick}>내 취향 전통주</button>
      <button value="myProfile" onClick={handleClick}>프로필 수정</button>
    </StyleMyPageSidebar>
  )
}

export default MyPageSidebar; 