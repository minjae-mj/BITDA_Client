import React from 'react'; 
import styled from 'styled-components'; 

type BtnPlainProps = {
  text: string;
  handleClick?: (e: any) => void;
}

const StyleBtnPlain = styled.button`
  color: #ED6663; 
  background-color: transparent; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 100px; 
  height: 40px; 
` 

const BtnPlain = ({ text, handleClick }: BtnPlainProps ) => {

  return (
    <StyleBtnPlain onClick={handleClick}>{text}</StyleBtnPlain>
  )
}

export default BtnPlain; 