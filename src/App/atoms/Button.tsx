import React from 'react'; 

interface ButtonProps {
  text: string; 
}

const Button = ({ text }: ButtonProps) => {
  return (
    <button>{text}</button>
  )
}

export default Button; 