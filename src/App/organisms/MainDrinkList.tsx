import React from 'react'
import styled from 'styled-components'
import ImgWithInfo from '../molecules/ImgWithInfo'
import { Link } from 'react-router-dom';

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
    <>
    <ul>
      {drinkList.map((drink): JSX.Element => (
        <li key={drink.id} >
          <Link to={`/drinks/detail/${drink.id}`}>
            <ImgWithInfo info={drink} />
          </Link>
        </li>
      ))}
    </ul>
    </>
  )
}

export default MainDrinkList; 