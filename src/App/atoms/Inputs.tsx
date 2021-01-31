import React from 'react'; 
import styled from 'styled-components';

type Props = {
  inputInfo : {placeholder : string, type: string}[];
  inputHandler: (e: any) => void; 

}

const StyledInput = styled.input`
  margin : 0.4rem;
  border:none;
  border-right:0px; 
  border-top:0px; 
  border-left:0px;
  height : 3.2rem;
  width : 80%;
  background: #fafafa;
  
  border-bottom : 1px solid #4E89AE;
  &:focus{
    outline :none;
    border-bottom : 2px solid #4E89AE;
  }
`;

export const StyledInputProfile = styled(StyledInput)`
  height: 2rem; 
  width: 20rem; 

  &::placeholder {
    font-size: 1.4rem; 
    line-height: 1.6; 
  }
`

const Input = ({inputInfo, inputHandler }: Props): JSX.Element => {


  return (
    <>
    { inputInfo.map((info) => (
      info.type === 'password' || info.type === 'confirmPassword' ||info.type === 'newPassword'?
      <StyledInput  placeholder={info.placeholder} onChange={inputHandler} data-type={info.type} type='password'></StyledInput>
      :
      <StyledInput className = 'infoInput' placeholder={info.placeholder} onChange={inputHandler} data-type={info.type}></StyledInput>
    ))
    }
    </>
  )
}
export default Input; 