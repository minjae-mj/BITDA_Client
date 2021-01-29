import React from 'react'; 
import styled from 'styled-components';

interface Props {
  img : any;
}

const StyledImg = styled.img`
  width: 100%;
  height: 70vh;
`;

function Img({ img } : Props) {
  

  return (
    <StyledImg src={img} />
  )
}

export default Img;