import React from 'react'; 
import { Link } from 'react-router-dom'; 
import styled from 'styled-components';
import LandingBtn from '../atoms/LandingBtn';


const StyledH1 = styled.h1`
  color : #F6F5F5;
  padding-bottom : 16px; 
`;

const StyledDiv = styled.div`
  padding-top : 24rem;
  padding-left : 10rem;
`;

const LandingFirstInfo = (): JSX.Element => {

  return (
    <StyledDiv>
      <StyledH1>전통주도 내 취향에 맞게<br />취향을 빚다</StyledH1>
      <Link to="/drinks/list">
        <LandingBtn text="전통주 보러가기" />
      </Link>
    </StyledDiv>
  )
}

export default LandingFirstInfo; 