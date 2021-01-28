import React from 'react'; 
import styled from 'styled-components'; 

type BtnPlainProps = {
  text: string;
  handleClick?: (e: any) => void;
}

const StyleBtnPlain = styled.button`
  color: var(--color-primary);  
  background-color: var(--color-white); 
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  width: 48%; 
  height: 4.8rem; 
  transition: all 0.1s;

  &:hover {
    background-color: #e6e8fa; 
  }

  &:active {
    transform: translateY(3px);
  }
` 

const BtnPlain = ({ text, handleClick }: BtnPlainProps ) => {

  return (
    <StyleBtnPlain onClick={handleClick}>{text}</StyleBtnPlain>
  )
}

export default BtnPlain; 