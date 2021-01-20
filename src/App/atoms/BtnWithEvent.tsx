import React from 'react'; 
import styled from 'styled-components'; 

type BtnWithEventProps = {
  text: string;   
  value?: string; 
  handleSubmit?: (e: any) => void; 
  handleClick?: (e: any) => void;
}

export const StyleBtnWithEvent = styled.button`
  color: #F6F5F5; 
  background-color: #ED6663; 
  border: 1px solid #ED6663; 
  border-radius: 5px; 
  font-size: 12px; 
  width: 100px; 
  height: 40px; 
` 

const BtnWithEvent = ({ text, value = "", handleClick, handleSubmit }: BtnWithEventProps ) => {

  return (
    <StyleBtnWithEvent value={value} onClick={handleClick || handleSubmit}>{text}</StyleBtnWithEvent>
  )
}

export default BtnWithEvent; 