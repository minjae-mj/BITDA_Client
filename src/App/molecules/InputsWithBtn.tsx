import React from 'react'; 
import Input from '../atoms/Inputs'
import MainSubmitBtn from '../atoms/MainSubmitBtn';

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
}

const InputsWithBtn = ({inputInfo, inputHandler }: Props): JSX.Element => {

  return (
    <div>
        <Input inputInfo={inputInfo} inputHandler={inputHandler} />
    </div>
  )
}

export default InputsWithBtn; 