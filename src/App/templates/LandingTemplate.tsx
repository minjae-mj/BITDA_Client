import React from 'react'; 
import styled from 'styled-components'; 
import LandingFirst from '../organisms/LandingFirst'
import LandingSecond from '../organisms/LandingSecond'
import LandingThird from '../organisms/LandingThird'


const First = styled.div`
  height: 50vh; 
  border: 2px solid palevioletred;
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

const LandingTemplate = (): JSX.Element => {
  
  return (
    <div>
      <First>
        <LandingFirst />
      </First>
      <Second>
        <LandingSecond />
      </Second>
      <Third>
        <LandingThird />
      </Third>
    </div>
  )
}

export default LandingTemplate; 