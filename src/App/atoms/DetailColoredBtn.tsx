import React from 'react'; 
import styled from 'styled-components'; 

type DetailColoredBtnProps = {
  text: string;    
}

const StyleDetailColoredBtn = styled.button`
  color: #F6F5F5; 
  background-color: #ED6663; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 100px; 
  height: 40px; 
` 

const DetailColoredBtn = ({ text }: DetailColoredBtnProps ) => {

  return (
    <StyleDetailColoredBtn>{text}</StyleDetailColoredBtn>
  )
}

export default DetailColoredBtn; 