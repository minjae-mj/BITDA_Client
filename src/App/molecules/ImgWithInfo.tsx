import React from 'react'

type Props = {
  info:{
    id: number, 
    drinkName: string, 
    drinkImage: string, 
    alcohol: number
  }
}

let ImgWithInfo=({info} : Props): JSX.Element => {

  return (
    <div>
      <img src={info.drinkImage} alt={info.drinkName}></img>
      <div>{info.drinkName}</div>
      <div>{info.alcohol}%</div>
    </div>
  )
}
export default ImgWithInfo