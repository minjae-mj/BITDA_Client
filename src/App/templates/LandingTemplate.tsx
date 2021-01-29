import React from 'react'; 
import styled from 'styled-components'; 
import LandingFirst from '../organisms/LandingFirst'
import LandingSecond from '../organisms/LandingSecond'
import LandingThird from '../organisms/LandingThird'


const First = styled.div`
  height: 65rem; 
  // border: 2px solid palevioletred;
  // background : var(--color-primary);
  position: relative;
  overflow:hidden;
`
const Second = styled.div`
  display: flex; 
  flex-direction: column;
  /* margin: auto;  
  max-width: 80%;  */
  background-color : #fdf4f4;
  align-items : center;
  padding : 100px 80px 100px 80px;
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
  /* padding-top : 1rem; */
  display: flex;
  flex-direction: column;
  justify-content: center;
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