import React from 'react'; 
import styled from 'styled-components'; 

type MyPageChangeBtnProps = {
  text: string;    
}

const StyleMyPageChangeBtn = styled.button`
  color: #F6F5F5; 
  background-color: #ED6663; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 80px; 
  height: 35px; 
` 

const MyPageChangeBtn = ({ text }: MyPageChangeBtnProps ) => {

  return (
    <StyleMyPageChangeBtn>{text}</StyleMyPageChangeBtn>
  )
}

export default MyPageChangeBtn; 