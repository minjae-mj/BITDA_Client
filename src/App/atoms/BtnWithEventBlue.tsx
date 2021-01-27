import React from 'react'; 
import styled from 'styled-components'; 

type BtnWithEventBlueProps = {
  text: string;   
  value?: string; 
  handleSubmit?: (e: any) => void; 
  handleClick?: (e: any) => void;
}

export const StyleBtnWithEventBlue = styled.button`
  color: #F6F5F5; 
  background-color: var(--color-secondary); 
  border: 1px solid var(--color-secondary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  height: 4.8rem;
  margin: 3px auto; 
  
  &:hover {
    color: #4E89AE; 
  }

  &:focus {
    color: #4E89AE
  }
` 
export const StyleBtnWithEventBlueSml = styled(StyleBtnWithEventBlue)`
  height: 3rem; 
  padding: 5px 1rem; 
  margin: 1rem; 
  transition: all 0.1s;

  &:active {
    transform: translateY(3px);
  }

  &:focus {
    color: #F6F5F5;
  }
`

const BtnWithEventBlue = ({ text, value = "", handleClick, handleSubmit }: BtnWithEventBlueProps ) => {

  return (
    <StyleBtnWithEventBlue value={value} onClick={handleClick || handleSubmit}>{text}</StyleBtnWithEventBlue>
  )
}

export default BtnWithEventBlue; 