import React from 'react'; 
import styled from 'styled-components'

interface ImageWithTextProps {
  info: {
    desc: string; 
    imgUrl: any; 

  }
}

const StyledDiv = styled.div`
  flex-basis: 60%;
  padding : 16px 16px;
  // border : 1px solid red;
`;
const StyledPictureDiv = styled.div`
  flex-basis: 40%;
  height : 100%; 
  width : 100%;
  // padding : 16px 16px;
  // border : 1px solid red;
`;



const ImageWithText = ({ info }: ImageWithTextProps): JSX.Element => {

  return (
    <>
      <StyledDiv>{info.desc}</StyledDiv>
      <StyledPictureDiv>
        <img src={info.imgUrl} alt='imgs'/>
      </StyledPictureDiv>
    </>
  )
}

export default ImageWithText; 

