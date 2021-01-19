import React, {useState, useEffect} from 'react'
import ImgWithInfo from '../molecules/ImgWithInfo'
import axios from 'axios'

let MainDrinkList =(): JSX.Element => {
  const [drinkList, setDrinkList] = useState({})
  let fakeDate = [
    {id:1, drinkName: '참이슬', drinkImage:'', alcohole: 16},
    {id:1, drinkName: '막걸리', drinkImage:'', alcohole: 12},
    {id:1, drinkName: '과실주', drinkImage:'', alcohole: 11},
  ];

  let getDrinkList = async () =>{
    let drinkList = axios.get('http://localhost:8080/drinks/list')
    setDrinkList(pre => ({...pre, drinkList}))
  }

  // useEffect(() =>{
  //   getDrinkList()
  // },[drinkList])

  return (
    <ul>
      {/* {drinkList.map((drink): JSX.Element => (
        <li key={drink.id} >
          <ImgWithInfo info={drink}/>
        </li>
      ))} */}
      
      {/* 페이크 데이터 */}
      {fakeDate.map((drink): JSX.Element => (
        <li key={drink.id} >
          <ImgWithInfo info={drink}/>
        </li>
      ))}
    </ul>
  )
}
export default MainDrinkList