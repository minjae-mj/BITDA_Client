import React from 'react'; 
import styled from 'styled-components';
import Input from '../atoms/Inputs'

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
  errMsg? : string
}

// const RowFlexBoxDiv = styled.div`
//   display : flex;
// `;
const ColumnFlexBoxDiv = styled.div`
  display : flex;
  flex-direction: column;
  align-items : center;
`;

const InputsWithBtn = ({inputInfo, inputHandler, errMsg }: Props): JSX.Element => {

  return (
    // <RowFlexBoxDiv id='adf'>
      <ColumnFlexBoxDiv>
        <Input inputInfo={inputInfo} inputHandler={inputHandler} /*errMsg={errMsg}*//>
      </ColumnFlexBoxDiv>
    // </RowFlexBoxDiv>
  )
}

export default InputsWithBtn; 