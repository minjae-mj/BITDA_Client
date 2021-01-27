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
  color: black;
  background-color: #f6f5f5;
  border: 1px solid #ee6f57;
  border-radius: 4px;
  font-size: 12px;
  padding: 4px 8px;
  outline: none;
  cursor: pointer;
  width: 10%;
  margin: 0.3rem;
  &:hover {
    color: #f6f5f5;
    background-color: #ee6f57;
  }
`;
const ActiveBtn = styled(StyledButton)`
  color: #f6f5f5;
  background-color: #ee6f57;
`;
const MainSelectBtn = ({
  type,
  buttonList,
  clickHandler,
}: BtnProps): JSX.Element => {
  const state = useSelector((state: any) => state.personalTypeReducer.types);

  return (
    <div>
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
    </div>
  );
};
export default MainSelectBtn;
