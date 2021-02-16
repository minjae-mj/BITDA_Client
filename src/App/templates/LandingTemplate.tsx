import React from 'react';
import styled from 'styled-components';
import LandingFirst from '../organisms/LandingFirst';
import LandingSecond from '../organisms/LandingSecond';
import LandingThird from '../organisms/LandingThird';

const First = styled.div`
  height: 80rem;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 1440px) {
    height : 62rem;
  }
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdf4f4;
  align-items: center;
  padding: 100px 80px 100px 80px;
  @media screen and (max-width: 546px) {
    padding: 36px 80px;
  }
  
`;

const Third = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  max-width: 80%;
  align-items: center;
  text-align: center;
  padding: 40px 0px 64px 0px;
  @media screen and (max-width: 546px) {
    padding-top : 0px;
  }
`;
const LandingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LandingTemplate = (): JSX.Element => {
  return (
    <LandingContainer>
      <First>
        <LandingFirst />
      </First>
      <Second>
        <LandingSecond />
      </Second>
      <Third>
        <LandingThird />
      </Third>
    </LandingContainer>
  );
};

export default LandingTemplate;
