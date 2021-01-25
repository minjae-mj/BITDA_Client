import React from 'react'; 

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 
  errMsg? : string;
}

const Input = ({inputInfo, inputHandler,errMsg }: Props): JSX.Element => {

  return (
    <>
    { inputInfo.map((info) => (
      info.type === 'password' || info.type === 'confirmPassword' ||info.type === 'newPassword'?
      <>
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type} type='password'></input>
      {/* <div>{errMsg}</div> */}
      </>
      :
      <>
      <input placeholder={info.placeholder} onChange={inputHandler} data-type={info.type}></input>
      {/* <div>{errMsg}</div> */}
      </>
    ))
    }
    </>
  )
}
// 사용해야 할 파일
export default Input; 