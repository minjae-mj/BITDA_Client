import React from 'react'; 

interface ImageWithTextProps {
  info: {
    desc: string; 
    imgUrl: string; 
  }
}

const ImageWithText = ({ info }: ImageWithTextProps): JSX.Element => {

  return (
    <>
      <div>{info.desc}</div>
      <div><img src={info.imgUrl} /></div>
    </>
  )
}

export default ImageWithText; 

