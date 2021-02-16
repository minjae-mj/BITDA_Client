import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

interface BtnProps {
  type: string;
  buttonList: string[];
  clickHandler: (e: any) => void;
}
const StyledButton = styled.button`
  color: var(--color-primary);
  background-color: #f7f7f7;
  border: 0;
  border-radius: 50px;
  border: solid 2px var(--color-primary);
  font-size: 1.2rem;
  font-weight: bold;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
  width: 8rem;
  height: 8rem;
  margin: 0.5rem 2.5rem;
  transition: all 300ms ease-in-out;
  &:hover {
    color: #f6f5f5;
    background-color: var(--color-primary);
  }
  @media screen and (max-width: 1440px) {
    font-size: 1rem;
    width: 7rem;
    height: 7rem;
  }
`;
const ActiveBtn = styled(StyledButton)`
  color: #f6f5f5;
  background-color: var(--color-primary);
`;

const StyleBtnContainer = styled.div`
  margin-top: 1.5rem;
`;

const MainSelectBtn = ({
  type,
  buttonList,
  clickHandler,
}: BtnProps): JSX.Element => {
  const state = useSelector((state: any) => state.personalTypeReducer.types);

  return (
    <StyleBtnContainer>
      {buttonList.map((button) =>
        button === state[type] ? (
          <ActiveBtn data-type={type} onClick={clickHandler}>
            {button}
          </ActiveBtn>
        ) : (
          <StyledButton data-type={type} onClick={clickHandler}>
            {button}
          </StyledButton>
        )
      )}
    </StyleBtnContainer>
  );
};
export default MainSelectBtn;
