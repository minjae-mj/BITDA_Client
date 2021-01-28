import React from 'react'; 
import styled from 'styled-components'; 
import LandingFirst from '../organisms/LandingFirst'
import LandingSecond from '../organisms/LandingSecond'
import LandingThird from '../organisms/LandingThird'


const First = styled.div`
  height: 48rem; 
  // border: 2px solid palevioletred;
  // background : var(--color-primary);
  position: relative;
  overflow:hidden;
`
const Second = styled.div`
  display: flex; 
  flex-direction: column;
  margin: auto;  
  max-width: 80%; 
  align-items : center;
  padding : 80px 0px 40px 0px;
  // border: 2px solid palevioletred;
  `
  
  const Third = styled.div`
  display: flex; 
  flex-direction: column;
  margin: auto;  
  max-width: 80%;
  align-items : center;
  text-align : center; 
  padding : 40px 0px 64px 0px;
// border: 2px solid lightblue;
`
const LandingContainer = styled.div`
  padding-top : 7.2rem;
`;

const LandingTemplate = (): JSX.Element => {
  
  return (
    <LandingContainer>
      <First>
        <LandingFirst />
      </First>
      <Second>
        <LandingSecond />
      </Second>
      <Third>
        <LandingThird />
      </Third>
    </LandingContainer>
  )
}

export default LandingTemplate; 