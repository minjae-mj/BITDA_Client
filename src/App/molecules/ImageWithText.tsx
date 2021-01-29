import React from 'react'; 
import styled from 'styled-components'

interface ImageWithTextProps {
  info: {
    desc: string; 
    desc2?: string;
    imgUrl: any; 

  }
}

const StyledDiv = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   line-height: 1.6;
   flex-direction: column;
  flex-basis: 50%;
  padding : 16px 16px;
  // border : 1px solid red;
`;
const StyledPictureDiv = styled.div`
  flex-basis: 50%;
  height : 100%; 
  width : 100%;
  // padding : 16px 16px;
  // border : 1px solid red;
`;

const StyledImage = styled.img`
width : 100%; 
height : 100%;
`
const StyledP = styled.p`
 font-family: 'Noto Serif KR', serif;
 color: #58595b;
 font-size: 3rem;
 padding: 0rem 4rem;
 margin-bottom: 2rem;
 text-align: center;
`
const ImageWithText = ({ info }: ImageWithTextProps): JSX.Element => {

  return (
    <>
      <StyledDiv>
        <StyledP> {info.desc}</StyledP>
        <StyledP> {info.desc2}</StyledP>
       </StyledDiv>
      <StyledPictureDiv>
        <StyledImage src={info.imgUrl} alt='imgs'/>
      </StyledPictureDiv>
    </>
  )
}

export default ImageWithText; 

