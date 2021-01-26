import React from 'react'; 
import Signin from '../organisms/Signin'
import styled from 'styled-components'; 

const SigninTemplate = (): JSX.Element => {

  return (
    <StyleSigninTemplate>
      <Signin />
    </StyleSigninTemplate>
  )
}

export default SigninTemplate; 

const StyleSigninTemplate = styled.div`
  margin-top: 7.2rem; 
`