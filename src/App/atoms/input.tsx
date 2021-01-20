import React from 'react'; 

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
}

const Input = ({inputInfo, inputHandler }: Props): JSX.Element => {

  return (
    <>
    { inputInfo.map((info) => (
      info.type === 'password' || info.type === 'confirmPassword'?
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type} type='password'></input>
      :
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type}></input>
    ))
    }
    </>
  )
}

export default Input; 