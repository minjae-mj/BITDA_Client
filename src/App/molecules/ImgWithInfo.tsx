import React from 'react'

type Props = {
  info:{
    id: number, 
    drinkName: string, 
    drinkImage: string, 
    alcohole: number
  }
}

let ImgWithInfo=({info} : Props): JSX.Element => {

  return (
    <div>
      <img src={info.drinkImage} alt={info.drinkName}></img>
      <div>{info.drinkName}</div>
      <div>{info.alcohole}%</div>
    </div>
  )
}
export default ImgWithInfo