import React from 'react'; 
import Signin from '../organisms/Signin'
import styled from 'styled-components'; 



const StyleSigninTemplate = styled.div`
  height : 86vh;
  padding-top : 7.2rem;
  display : flex;
  justify-content: center;
  align-items : center;
  `

const SigninTemplate = (): JSX.Element => {

  return (
    <StyleSigninTemplate>
      <Signin />
    </StyleSigninTemplate>
  )
}

export default SigninTemplate; 
