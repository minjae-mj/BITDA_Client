import React from 'react'; 
import styled from 'styled-components'; 

type LandingBtnProps = {
  text: string;    
}

const StyleLandingBtn = styled.button`
  color: #F6F5F5; 
  background: var(--color-primary); 
  border: 1px solid var(--color-primary); 
  border-radius: 5px; 
  font-size: 2rem; 
  width: 16rem; 
  height: 5.6rem;
  transition: all 250ms ease-in-out;

  &:hover {
    background-color: #D5544B; 
    border: 1px solid #D5544B; 
  }
` 

const LandingBtn = ({ text }: LandingBtnProps ) => {

  return (
    <StyleLandingBtn>{text}</StyleLandingBtn>
  )
}

export default LandingBtn; 

//reference
// import React from 'react'; 
// import styled from 'styled-components'; 

// const StyleTestBtn = styled.input`
//   padding: 0.5em;
//   margin: 0.5em;
//   color: ${props => props.color || "palevioletred"};
//   background: papayawhip;
//   border: none;
//   border-radius: 3px;
// `;

// interface TestBtnProps {
//   color: string; 
// }

// const TestBtn = ({ color }: TestBtnProps) => {
//   return (
//     <div>
//       <StyleTestBtn color={color} />
//     </div>
//   )
// }; 

// export default TestBtn; 

// 구글 클라이언트 아이디
// 161712089232-v1udttltgin8n37iou92c03qrckdrvkv.apps.googleusercontent.com

// 카카오 클라이언트 아이디
// a58db4c46f3113c111f06599a69d529b