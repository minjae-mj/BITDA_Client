import React from 'react'; 
import Input from '../atoms/input'
import MainSubmitBtn from '../atoms/MainSubmitBtn';

type Props = {
  placeholderList : string[]
}

const InputsWithBtn = ({placeholderList }: Props): JSX.Element => {
  return (
    <div>
      {placeholderList.map((placeholder): JSX.Element => (
        <Input placeholder={placeholder} />
      ))}
    </div>
  )
}

export default InputsWithBtn; 