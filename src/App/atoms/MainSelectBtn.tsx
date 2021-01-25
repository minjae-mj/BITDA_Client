import React from 'react'; 
import { useSelector } from 'react-redux'; 
// import { RootState } from '../../reducers'; 
import styled from 'styled-components'; 

interface BtnProps {
  type: string;
  buttonList : string[];
  clickHandler: (e: any) => void;
}
const StyledButton = styled.button`
  color: black;
  // background-color: #F6F5F5; 
  border: 1px solid #EE6F57; 
  border-radius: 4px; 
  font-size: 12px; 
  padding: 4px 8px;
  outline : none;
  cursor : pointer;
  &:hover{
    color: #F6F5F5; 
    background-color: #EE6F57;
  }
` ;
const ActiveBtn = styled(StyledButton)`
    color: #F6F5F5; 
    background-color: #EE6F57;
`;
const MainSelectBtn = ({ type, buttonList, clickHandler }: BtnProps ): JSX.Element => {
  const state = useSelector((state: any) => state.personalTypeReducer.types);
  
  return (
    <div>
      {buttonList.map((button)=>(
        button === state[type] ? 
        <ActiveBtn data-type={type} onClick={clickHandler}>{button}</ActiveBtn> 
        :
        <StyledButton data-type={type} onClick={clickHandler}>{button}</StyledButton>
      ))}
    </div>
  )
}
export default MainSelectBtn; 