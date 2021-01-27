import React from 'react'; 
import Signup from '../organisms/Signup';
import styled from 'styled-components'; 
import backgroundPic from '../../images/background.png'
import minjae from '../../images/minjae.png'

const SignupContainer = styled.div`
  height : 86vh;
  padding-top : 7.2rem;
  display: flex;
  justify-content : center;
  align-items : center;
  background-image: url(${backgroundPic});
`;

const LeftRedDiv = styled.div`
  flex-basis : 40%;
  display : flex;
  justify-content : space-evenly;
  align-items : flex-end;

  border : 2px solid var(--color-primary);
  border-radius : 8px 0px 0px 8px;
  background : var(--color-primary);
  height : 70%;
  color : var(--color-white);
  font-size : 3.2rem;
  // align-items : center;
  position: relative;
`;

const Minjae = styled.img`
  width : 40%;
  height : 90%;
  align-items : flex-end;
  // position: relative;
  // top : 1.9rem;
  // margin-top : 3.8rem;
  @media screen and (max-width: 700px){
    width : 30%;
    height : 80%;
    transition : all 500ms ease-in-out;
  }
`;

const WelcomeDiv = styled.div`
  margin-top : 11rem;
  margin-bottom : 16rem;
  @media screen and (max-width: 700px){
    margin-top : 18rem;
    margin-bottom : 12rem;
    font-size : 2.4rem;
    transition : all 500ms ease-in-out;
  }
`;

const SignupTemplate = (): JSX.Element => {

  return (
    <SignupContainer>
      
      <LeftRedDiv>
        <Minjae src={minjae} alt='minjae-mj'></Minjae>
        <WelcomeDiv>
          WELCOME <br/>to BITDA!
        </WelcomeDiv>
      </LeftRedDiv>

      <Signup />
    </SignupContainer>
  )
}

export default SignupTemplate; 