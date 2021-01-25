import React from 'react'; 
import Input from '../atoms/Inputs'

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
  errMsg? : string
}

const InputsWithBtn = ({inputInfo, inputHandler, errMsg }: Props): JSX.Element => {

  return (
    <div>
      <Input inputInfo={inputInfo} inputHandler={inputHandler} /*errMsg={errMsg}*//>
    </div>
  )
}

export default InputsWithBtn; 