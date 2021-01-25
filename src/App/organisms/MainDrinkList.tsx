import React from 'react'
import styled from 'styled-components'
import ImgWithInfo from '../molecules/ImgWithInfo'

interface Props {
  drinkList: {
    id: number; 
    drinkName: string; 
    drinkImage: string;
    alcohol: number;
  }[]
}

const Test = styled.div`
  height: 2000px;
`;

let MainDrinkList =({ drinkList }: Props): JSX.Element => {

  return (
    <>
    <Test></Test>
    <div></div>
    <ul>
      {drinkList.map((drink): JSX.Element => (
        <li key={drink.id} >
          <ImgWithInfo info={drink}/>
        </li>
      ))}
    </ul>
    </>
  )
}

export default MainDrinkList; 