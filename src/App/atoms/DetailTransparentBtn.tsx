import React from 'react'; 
import styled from 'styled-components'; 

type DetailTransparentBtnProps = {
  text: string;    
}

const StyleDetailTransparentBtn = styled.button`
  color: #ED6663; 
  background-color: transparent; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 100px; 
  height: 40px; 
` 

const DetailTransparentBtn = ({ text }: DetailTransparentBtnProps ) => {

  return (
    <StyleDetailTransparentBtn>{text}</StyleDetailTransparentBtn>
  )
}

export default DetailTransparentBtn; 