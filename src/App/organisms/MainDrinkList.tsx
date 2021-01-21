import React from 'react'
import ImgWithInfo from '../molecules/ImgWithInfo'

interface Props {
  drinkList: {
    id: number; 
    drinkName: string; 
    drinkImage: string;
    alcohol: number;
  }[]
}

let MainDrinkList =({ drinkList }: Props): JSX.Element => {

  return (
    <ul>
      {drinkList.map((drink): JSX.Element => (
        <li key={drink.id} >
          <ImgWithInfo info={drink}/>
        </li>
      ))}
    </ul>
  )
}

export default MainDrinkList; 