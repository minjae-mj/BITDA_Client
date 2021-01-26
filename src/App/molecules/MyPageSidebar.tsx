import React from 'react'; 
import styled from 'styled-components'; 
import BtnWithEvent from '../atoms/BtnWithEvent';

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
      <BtnWithEvent value="bookmark" handleClick={handleClick} text="내 취향 전통주" />
      <BtnWithEvent value="myProfile" handleClick={handleClick} text="프로필 수정" />
      <BtnWithEvent value="addDrink" handleClick={handleClick} text="전통주 등록" />
    </StyleMyPageSidebar>
  )
}

export default MyPageSidebar; 