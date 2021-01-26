import React from 'react'; 
import styled from 'styled-components'; 

type Props = {
  text: string;
  submitHandler: () => void;    
}

const StyledBtn = styled.button`
  background : #A4CAED;
  border : 1px solid #A4CAED;
  border-radius : 4px;
  color : var(--color-white);
  width : 80%;
  height : 3.2rem;
  margin-top : 1.6rem;
`;

const MainSubmitBtn = ({ text, submitHandler }: Props ): JSX.Element => {
  
  return (
    <StyledBtn onClick={submitHandler}>{text}</StyledBtn>
  )
}

export default MainSubmitBtn; 