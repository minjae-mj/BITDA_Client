import React from 'react'; 
import styled from 'styled-components';
import bitdaStamp from '../../images/bitdaStamp.png'

const StyledDiv = styled.div`
  height : 50%;
  padding-right : 2.4rem;
`;

const StyledImg = styled.img`
  height : 100%;
`;

const FooterStamp = (): JSX.Element => {
  return (
    <StyledDiv>
      <StyledImg src={bitdaStamp} alt='bitda stamp'></StyledImg>
    </StyledDiv>
  )
}

export default FooterStamp; 