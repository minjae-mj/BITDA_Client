import React from 'react';
import styled from 'styled-components';
import FooterStamp from '../atoms/FooterStamp';

const FlexBoxDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 10rem;
  align-items: center;
  margin-top: 5rem;
  font-size: 1.2rem;
`;
const StyledDiv = styled.div`
  color: var(--color-primary);
  margin: 16px;
  text-align: center;
`;

const InvisibleDiv = styled.div`
  opacity: 0;
`;

const Footer = (): JSX.Element => {
  return (
    <FlexBoxDiv>
      <InvisibleDiv>Do Not Delete~</InvisibleDiv>
      <div>
        <StyledDiv>Drop the bit.</StyledDiv>
        <StyledDiv>© All rights reserved 2021</StyledDiv>
      </div>
      <FooterStamp />
    </FlexBoxDiv>
  );
};

export default Footer;
