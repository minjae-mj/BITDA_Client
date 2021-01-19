import React from 'react'; 
import Input from '../atoms/Input'
import MainSubmitBtn from '../atoms/MainSubmitBtn';

type Props = {
  placeholderList : string[];
  inputHandler?: (e: any) => void; 
}

const InputsWithBtn = ({placeholderList, inputHandler }: Props): JSX.Element => {
  return (
    <div>
      {placeholderList.map((placeholder): JSX.Element => (
        <Input placeholder={placeholder} inputHandler={inputHandler} />
      ))}
    </div>
  )
}

export default InputsWithBtn; 