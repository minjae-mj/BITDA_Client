import React from 'react'
import ImgWithInfo from '../molecules/ImgWithInfo'

let MainDrinkList =(): JSX.Element => {
  
  let fakeDate = [
    {id:1, drinkName: '참이슬', drinkImage:'', alcohole: 16},
    {id:1, drinkName: '막걸리', drinkImage:'', alcohole: 12},
    {id:1, drinkName: '과실주', drinkImage:'', alcohole: 11},
  ];

  return (
    <ul>
      {fakeDate.map((drink): JSX.Element => (
        <li key={drink.id} >
          <ImgWithInfo info={drink}/>
        </li>
      ))}
    </ul>
  )
}
export default MainDrinkList