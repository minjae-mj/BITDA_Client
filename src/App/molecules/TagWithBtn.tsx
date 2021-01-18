import React from 'react'; 
import styled from 'styled-components'; 
import MainSelectBtn from '../atoms/MainSelectBtn'

type Props = {
  title: string;
  category : string[];   
}

// const StyleLandingBtn = styled.button`
//   color: #F6F5F5; 
//   background-color: #ED6663; 
//   border: 1px solid #ED6663; 
//   border-radius: 5px; 
//   font-size: 12px; 
//   width: 100px; 
//   height: 40px; 
// ` 

const TagWithBtn = ({ title,category }: Props ) : JSX.Element => {

  return (
    <div>
      <div>{title}</div>
      <ul>
        {category.map((item : string):JSX.Element => 
        <li>
          <MainSelectBtn text={item}/>
        </li>
        )}
      </ul>
    </div>
  )
}

export default TagWithBtn; 
