import React from 'react'; 
import styled from 'styled-components'

interface ImageWithTextProps {
  info: {
    desc: string; 
    imgUrl: string; 
  }
}

const StyledDiv = styled.div`
  flex-basis: 60%;
  padding : 16px 16px;
  // border : 1px solid red;
`;
const StyledPictureDiv = styled.div`
  flex-basis: 40%;
  // padding : 16px 16px;
  // border : 1px solid red;
`;



const ImageWithText = ({ info }: ImageWithTextProps): JSX.Element => {

  return (
    <>
      <StyledDiv>{info.desc}</StyledDiv>
      <StyledPictureDiv><img src={info.imgUrl} alt='mainPicture'/></StyledPictureDiv>
    </>
  )
}

export default ImageWithText; 

