import React from 'react'; 
import styled from 'styled-components'; 

type BtnPlainProps = {
  text: string;
  handleClick?: (e: any) => void;
}

const StyleBtnPlain = styled.button`
  color: var(--color-primary);  
  background-color: #fafafa; 
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  width: 45%; 
  height: 4.8rem; 
  margin: 3px auto; 
` 

const BtnPlain = ({ text, handleClick }: BtnPlainProps ) => {

  return (
    <StyleBtnPlain onClick={handleClick}>{text}</StyleBtnPlain>
  )
}

export default BtnPlain; 