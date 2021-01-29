import React from 'react';
import styled from 'styled-components';

type LandingBtnProps = {
  text: string;
};

const StyleLandingBtn = styled.button`
  color: #f6f5f5;
  background: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: 5px;
  font-size: 2rem;
  width: 16rem;
  height: 5.6rem;
  transition: all 250ms ease-in-out;
  margin-top: 2rem;
  &:hover {
    background-color: #d5544b;
    border: 1px solid #d5544b;
  }
`;

const LandingBtn = ({ text }: LandingBtnProps) => {
  return <StyleLandingBtn>{text}</StyleLandingBtn>;
};

export default LandingBtn;