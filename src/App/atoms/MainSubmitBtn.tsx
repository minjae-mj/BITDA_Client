import React from 'react'; 
import styled from 'styled-components'; 

type Props = {
  text: string;    
}
// const StyleNavCatetoryBtn = styled.button`
//   color: #ED6663; 
//   background-color: transparent; 
//   border: none; 
//   font-size: 16px; 
//   outline: none;
//   cursor: pointer;
//   &:hover {
//     font-weight: bold;
//   }
// ` 
const MainSubmitBtn = ({ text }: Props ): JSX.Element => {
  
  let submitHandler = () =>{
    console.log('dont worry, its clicked !!!!')
  }

  return (
    <button onClick={submitHandler}>{text}</button>
  )
}

export default MainSubmitBtn; 