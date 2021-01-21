import React from 'react'; 

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
}

const Input = ({inputInfo, inputHandler }: Props): JSX.Element => {

  return (
    <>
    { inputInfo.map((info) => (
      info.type === 'password' || info.type === 'confirmPassword' ||info.type === 'newPassword'?
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type} type='password'></input>
      :
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type}></input>
    ))
    }
    </>
  )
}
// 사용해야 할 파일
export default Input; 