import React from 'react'; 
import styled from 'styled-components'; 
import LandingFirst from '../organisms/LandingFirst'
import LandingSecond from '../organisms/LandingSecond'
import LandingThird from '../organisms/LandingThird'

const First = styled.div`
  height: 40vh; 
  border: 2px solid palevioletred;
`
const Second = styled.div`
  display: flex; 
  flex-direction: column;
  margin: auto;  
  max-width: 80%; 
  border: 2px solid palevioletred;
`
const Third = styled.div`
display: flex; 
flex-direction: column;
margin: auto;  
max-width: 80%; 
border: 2px solid lightblue;
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