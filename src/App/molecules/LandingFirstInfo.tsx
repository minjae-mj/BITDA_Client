import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LandingBtn from '../atoms/LandingBtn';

const StyledH1 = styled.p`
  color: #f6f5f5;
  padding-bottom: 16px;
  font-family: 'Nanum Pen Script', cursive;
  font-size: 5.6rem;
`;

const StyledDiv = styled.div`
  padding-top: 40rem;
  padding-left: 15rem;
  position: absolute;
  top: 0px;
  left: 0px;

  @media screen and (max-width: 1440px) {
    padding-top: 30rem;
    padding-left: 10rem;
  }
`;

const LandingFirstInfo = (): JSX.Element => {
  return (
    <StyledDiv>
      <StyledH1>
        전통주도 내 취향에 맞게
        <br />
        취향을 빚다
      </StyledH1>
      <Link to="/drinks/list">
        <LandingBtn text="전통주 보러가기" />
      </Link>
    </StyledDiv>
  );
};

export default LandingFirstInfo;
