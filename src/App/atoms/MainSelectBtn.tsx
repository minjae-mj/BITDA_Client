import React from 'react';
import { useSelector } from 'react-redux';
// import { RootState } from '../../reducers';
import styled from 'styled-components';

interface BtnProps {
  type: string;
  buttonList: string[];
  clickHandler: (e: any) => void;
}
const StyledButton = styled.button`
  color: #ee6f57;
  background-color: #f7f7f7;
  border: 0;
  border-radius: 6px;
  border: solid 1px #ee6f57;
  font-size: 1.5rem;
  font-weight: 500;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
  width: 10%;
  height: 4rem;
  margin: 0.5rem;
  &:hover {
    color: #f6f5f5;
    background-color: #ee6f57;
  }
`;
const ActiveBtn = styled(StyledButton)`
  color: #f6f5f5;
  background-color: #ee6f57;
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
