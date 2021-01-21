import React from 'react'; 
import styled from 'styled-components'; 

type Props = {
  text: string;
  submitHandler: () => void;    
}

const MainSubmitBtn = ({ text, submitHandler }: Props ): JSX.Element => {
  
  return (
    <button onClick={submitHandler}>{text}</button>
  )
}

export default MainSubmitBtn; 