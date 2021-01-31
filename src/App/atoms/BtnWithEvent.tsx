import React from 'react'; 
import styled from 'styled-components'; 

type BtnWithEventProps = {
  text: string;   
  value?: string; 
  handleSubmit?: (e: any) => void; 
  handleClick?: (e: any) => void;
}

export const StyleBtnWithEvent = styled.button`
  color: #fafafa; 
  background-color: var(--color-primary); 
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  font-size: 1.5rem; 
  width: 48%; 
  height: 4.8rem;
  transition: all .1s;

  &:hover {
    background-color: #D5544B; 
  }

  &:active {
    transform: translateY(3px);
  }
` 

const BtnWithEvent = ({ text, value = "", handleClick, handleSubmit }: BtnWithEventProps ) => {

  return (
    <StyleBtnWithEvent value={value} onClick={handleClick || handleSubmit}>{text}</StyleBtnWithEvent>
  )
}

export default BtnWithEvent; 