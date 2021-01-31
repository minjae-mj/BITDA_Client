import React from 'react'; 
import Signup from '../organisms/Signup';
import styled from 'styled-components'; 
import signupCard from '../../images/signupCard.png'

const SignupContainer = styled.div`
  height : 86vh;
  padding-top : 7.2rem;
  display: flex;
  justify-content : center;
  align-items : center;
  `;


const LeftRedDiv = styled.div`
  flex-basis : 35%;
  display : flex;
  justify-content : space-evenly;
  align-items : flex-end;

  border : 1px solid var(--color-primary);
  border-right : 0px;
  border-radius : 8px 0px 0px 8px;
  background : var(--color-primary);
  height : 70%;
  color : var(--color-white);
  font-size : 3.2rem;
  position: relative;
  overflow : hidden;
`;

const StyledSignupCard = styled.img`
  width : 100%;
  height: 100%;
`;


const SignupTemplate = (): JSX.Element => {

  return (
    <SignupContainer>
      
      <LeftRedDiv>
        <StyledSignupCard src={signupCard} alt='signup card'></StyledSignupCard>
      </LeftRedDiv>

      <Signup />
    </SignupContainer>
  )
}

export default SignupTemplate; 
