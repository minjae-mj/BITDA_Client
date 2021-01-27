import React from 'react'; 
import Signin from '../organisms/Signin'
import styled from 'styled-components'; 
import backgroundPic from '../../images/background.png'

const StyleSigninTemplate = styled.div`
  // margin-top: 7.2rem;

  height : 86vh;
  padding-top : 7.2rem;
  display : flex;
  justify-content: center;
  align-items : center;
  background-image: url(${backgroundPic});

`
const SigninTemplate = (): JSX.Element => {

  return (
    <StyleSigninTemplate>
      <Signin />
    </StyleSigninTemplate>
  )
}

export default SigninTemplate; 
