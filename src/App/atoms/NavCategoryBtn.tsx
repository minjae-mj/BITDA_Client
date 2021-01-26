import React from 'react'; 
import styled from 'styled-components'; 

type NavCatetoryBtnProps = {
  text: string;   
  handleClick?: () => void;  
}

const StyleNavCatetoryBtn = styled.button`
  color: #ED6663; 
  background-color: transparent; 
  border: none; 
  font-size: 16px; 
  outline: none;
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
` 

const NavCatetoryBtn = ({ text, handleClick }: NavCatetoryBtnProps ) => {

  return (
    <StyleNavCatetoryBtn onClick={handleClick}>{text}</StyleNavCatetoryBtn>
  )
}

export default NavCatetoryBtn; 