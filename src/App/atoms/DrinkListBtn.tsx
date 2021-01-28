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
  width: 10%;
  height: 4rem;
  margin-top: 1.6rem;
  margin-right: 1rem;
`;

const DrinkListBtn = ({ text, submitHandler }: Props): JSX.Element => {
  return <StyledBtn onClick={submitHandler}>{text}</StyledBtn>;
};

export default DrinkListBtn;
