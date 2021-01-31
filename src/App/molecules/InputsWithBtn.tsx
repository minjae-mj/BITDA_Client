import React from 'react'; 
import styled from 'styled-components';
import Input from '../atoms/Inputs'

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
  errMsg? : string
};

const ColumnFlexBoxDiv = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
  width : 100%;
`;

const InputsWithBtn = ({inputInfo, inputHandler, errMsg }: Props): JSX.Element => {

  return (
    <ColumnFlexBoxDiv>
      <Input inputInfo={inputInfo} inputHandler={inputHandler} />
    </ColumnFlexBoxDiv>
  )
}

export default InputsWithBtn; 