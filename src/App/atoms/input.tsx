import React from 'react'; 

type Props = {
  placeholder : string
}

const Input = ({placeholder }: Props): JSX.Element => {
  return (
    <input placeholder={placeholder}></input>
  )
}

export default Input; 