import React ,{useEffect, useState} from 'react'; 
import styled from 'styled-components'; 
import MainSelectBtn from '../atoms/MainSelectBtn'

type Props = {
  title: string;
  buttonList : string[];   
  type : string;
}
const TagWithBtn = ({ title, buttonList, type }: Props ) : JSX.Element => {
  // let initialPersonalTaste = {
  //   type : '',
  //   price : '',
  //   taste : '',
  //   alcohol : ''
  // }
  // const [isClicked, setIsClicked] = useState(false);
  // const [personalTaste, setPersonalTaste] = useState(initialPersonalTaste);

  // let submitHandler = (e : any) : void => {
  //   let target = e.target.innerText;  // 1만원 이하... 등등
  //   let type = e.target.dataset.type; // type, price, taste, alcohol
  //   let Clicked = e.target.dataset.clicked; 

  //   setIsClicked(!isClicked)
  //   console.log(Clicked)
  //   // setPersonalTaste({...initialPersonalTaste, [type] : target}); 
  //   // 왜 이전 스테이트를 불러오지 못하니 ... ?
  //   // setPersonalTaste(Object.assign({},personalTaste,{[type] : target}));
  //   // 너도 왜 이전 스테이트를 불러오지 못하니 ... ?
  // }
  
  // useEffect(() =>{
  //   console.log(personalTaste)
  // },[personalTaste])

  return (
    <div>
      <div>{title}</div>
      <MainSelectBtn type={type} buttonList={buttonList}/>
      {/* <ul>
        {buttonList.map((item : string):JSX.Element => 
        <li>
          <MainSelectBtn type={type} buttonList={buttonList} text={item}  />
        </li>
        )}
      </ul> */}
    </div>
  )
}

export default TagWithBtn; 
