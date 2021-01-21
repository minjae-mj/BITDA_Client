import React from 'react'; 
import Main from '../organisms/Main';
import styled from 'styled-components'; 

const StyleMainTemplate = styled.div`
  font-family: 'sans-serif'
`

const MainTemplate = (): JSX.Element => {

  return (
    <StyleMainTemplate>
      <Main />
    </StyleMainTemplate>
  )
}

export default MainTemplate; 