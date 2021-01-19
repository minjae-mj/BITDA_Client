import React from 'react'; 

type Props = {
  placeholder : string; 
  inputHandler?: (e: any) => void; 
}

const Input = ({placeholder, inputHandler }: Props): JSX.Element => {
  return (
    <input placeholder={placeholder} onChange={inputHandler}></input>
  )
}

export default Input; 