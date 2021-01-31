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
  width: 80%;
  height: 3.2rem;
  margin-top: 1.6rem;
  &:hover {
    background: #4e89ae;
  }

  @media screen and (max-width: 720px) {
    margin-top: 0rem;
  }
`;

const MainSubmitBtn = ({ text, submitHandler }: Props): JSX.Element => {
  return <StyledBtn onClick={submitHandler}>{text}</StyledBtn>;
};

export default MainSubmitBtn;
