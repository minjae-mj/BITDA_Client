import React, { useState} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../reducers'; 
import { updateTypes } from '../../actions'
import MainSelectBtn from '../atoms/MainSelectBtn'

type Props = {
  title: string;
  buttonList : string[];   
  type : string;
}
const TagWithBtn = ({ title, buttonList, type }: Props ) : JSX.Element => {
  const state = useSelector((state: RootState) => state.personalTypeReducer)!;
  const dispatch = useDispatch();
  const [activeItem, setActiveItem] = useState(""); // isClicked

  let clickHandler = (e : any) : void => {
    let target = e.target.innerText;  // 1만원 이하... 등등
    setActiveItem(target); 

    if(activeItem === target){
      setActiveItem("")
      dispatch(updateTypes(type, ""))
    } else {
      setActiveItem(target)
      dispatch(updateTypes(type, target))
    }

    // if(eventType === 'category') {
    //   dispatch(updateCategory(active))
    // } else if (eventType === 'price') {
    //   dispatch(updatePrice(active))
    // } else if (eventType === 'taste') {
    //   dispatch(updateTaste(active))
    // } else if (eventType === 'alcohol') {
    //   dispatch(updateAlcohol(active))
    // }
  }


  return (
    <div>
      <div>{title}</div>
      <MainSelectBtn type={type} buttonList={buttonList} clickHandler={clickHandler} active={activeItem} />
    </div>
  )
}

export default TagWithBtn; 
