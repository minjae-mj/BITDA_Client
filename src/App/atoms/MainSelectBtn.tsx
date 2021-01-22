import React from 'react'; 
import styled from 'styled-components'; 

interface BtnProps {
  type: string;
  buttonList : string[];
  clickHandler: (e: any) => void;
  active: string;
}
const StyledButton = styled.button`
  color: black;
  // background-color: #F6F5F5; 
  border: 1px solid #EE6F57; 
  border-radius: 4px; 
  font-size: 12px; 
  padding: 4px 8px;
  outline : none;
  cursor : pointer;
  &:hover{
    color: #F6F5F5; 
    background-color: #EE6F57;
  }
` ;
const ActiveBtn = styled(StyledButton)`
    color: #F6F5F5; 
    background-color: #EE6F57;
`;
const MainSelectBtn = ({ type, buttonList, clickHandler, active }: BtnProps ): JSX.Element => {
  // const state = useSelector((state: RootState) => state.personalTypeReducer.types);
  // const dispatch = useDispatch();
  // const [active, setActive] = useState(""); // isClicked

  // const [eventType, setEventType] = useState(""); 
  
  // let clickHandler = (e : any) : void => {
  //   let target = e.target.innerText;  // 1만원 이하... 등등
  //   let type = e.target.dataset.type; // type, price, taste, alcohol

  //   setEventType(type); 

  //   if(active === target){
  //     setActive("")
  //   } else {
  //     setActive(target)
  //   }

  //   if(eventType === 'category') {
  //     dispatch(updateCategory(active))
  //   } else if (eventType === 'price') {
  //     dispatch(updatePrice(active))
  //   } else if (eventType === 'taste') {
  //     dispatch(updateTaste(active))
  //   } else if (eventType === 'alcohol') {
  //     dispatch(updateAlcohol(active))
  //   }
  // }
  
  return (
    <div>
      {buttonList.map((button)=>(
        button === active? 
        <ActiveBtn data-type={type} onClick={clickHandler}>{button}</ActiveBtn> 
        :
        <StyledButton data-type={type} onClick={clickHandler}>{button}</StyledButton>
      ))}
    </div>
  )
}
export default MainSelectBtn; 