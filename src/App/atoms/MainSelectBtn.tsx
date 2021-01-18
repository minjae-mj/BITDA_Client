import React from 'react'; 
import styled from 'styled-components'; 

type Props = {
  text: string;    
}

// const StyleLandingBtn = styled.button`
//   color: #F6F5F5; 
//   background-color: #ED6663; 
//   border: 1px solid #ED6663; 
//   border-radius: 5px; 
//   font-size: 12px; 
//   width: 100px; 
//   height: 40px; 
// ` 

const LandingBtn = ({ text }: Props ): JSX.Element=> {

  return (
    <button>{text}</button>
  )
}

export default LandingBtn; 
