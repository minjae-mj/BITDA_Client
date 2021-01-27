import React from 'react'; 
import styled from 'styled-components'; 
import BtnWithEventBlue from '../atoms/BtnWithEventBlue';

interface Props {
  handleClick: (e: any) => void; 
}

const StyleMyPageSidebar = styled.div`
  display: flex; 
  flex-direction: column; 
  width: 18rem; 

  background-color: var(--color-secondary);  
`

const MyPageSidebar = ({ handleClick }: Props): JSX.Element => {

  return (
    <StyleMyPageSidebar>
      <BtnWithEventBlue value="bookmark" handleClick={handleClick} text="내 취향 전통주" />
      <BtnWithEventBlue value="myProfile" handleClick={handleClick} text="프로필 수정" />
      <BtnWithEventBlue value="addDrink" handleClick={handleClick} text="전통주 등록" />
    </StyleMyPageSidebar>
  )
}

export default MyPageSidebar; 