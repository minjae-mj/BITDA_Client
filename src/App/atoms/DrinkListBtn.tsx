import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
  submitHandler: () => void;
};

const StyledBtn = styled.button`
  background: #a4caed;
  border: 1px solid #a4caed;
  border-radius: 4px;
  color: var(--color-white);
  width: 15rem;
  height: 4.5rem;
  margin-top: 1.6rem;
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: bold;
  transition: all 300ms ease-in-out;
  &:hover {
    background: #4e89ae;
    border: 1px solid #4e89ae;
  }
  @media screen and (max-width: 1440px) {
    font-size: 1.5rem;
    width: 12rem;
    height: 3.5rem;
  }
`;

const DrinkListBtn = ({ text, submitHandler }: Props): JSX.Element => {
  return <StyledBtn onClick={submitHandler}>{text}</StyledBtn>;
};

export default DrinkListBtn;
