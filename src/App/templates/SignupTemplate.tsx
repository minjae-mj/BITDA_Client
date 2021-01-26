import React from 'react'; 
import Signup from '../organisms/Signup';
import styled from 'styled-components'; 
import backgroundPic from '../../images/background.png'
import minjae from '../../images/minjae.png'

const SignupContainer = styled.div`
  height : 80vh;
  padding-top : 7.2rem;
  display: flex;
  justify-content : center;
  align-items : center;
  background-image: url(${backgroundPic});
`;

const LeftRedDiv = styled.div`
  flex-basis : 40%;
  border : 2px solid var(--color-primary);
  border-radius : 8px 0px 0px 8px;
  background : var(--color-primary);
  height : 70%;
  color : var(--color-white);
  font-size : 3.2rem;
  display : flex;
  justify-content : space-evenly;
  // align-items : flex-end;
  align-items : center;
  position: relative;
`;

const Minjae = styled.img`
  width : 40%;
  height : 90%;
  position: relative;
  top : 1.9rem;
  // margin-top : 3.8rem;
`;

const SignupTemplate = (): JSX.Element => {

  return (
    <SignupContainer>
      <LeftRedDiv>
        <Minjae src={minjae} alt='minjae-mj'></Minjae>
        <div>
          WELCOME <br/>to BITDA!
        </div>
      </LeftRedDiv>
      <Signup />
    </SignupContainer>
  )
}

export default SignupTemplate; 