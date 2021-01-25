import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTypes } from '../../actions'; 
import { RootState } from '../../reducers';
import MainDrinkList from '../organisms/MainDrinkList';
import MainSelectSection from '../organisms/MainSelectSection';
import axios from 'axios';

interface Props {
  id: number;
  drinkName: string;
  drinkImage: string;
  alcohol: number;
}
const Main = (): JSX.Element => {
  const state = useSelector((state: RootState) => state.personalTypeReducer);
  const dispatch = useDispatch();
  const [drinkList, setDrinkList] = useState<Props[]>([]);
  const [isFiltered, setIsFiltered] = useState(false);

  let submitHandler = async () => {
    let submitTaste = await axios.post(
      `http://localhost:8080/drinks/list/type/${drinkList.length}`,
      {
        ...state.types,
      }
    );
    let { data } = submitTaste;
    setDrinkList(data);
    setIsFiltered(true);
  };

  let selectAllHandler = async () => {
    let submitAll = await axios.get(
      `http://localhost:8080/drinks/list/${drinkList.length}`
    );
    let { data } = submitAll;
    setDrinkList(data);

    dispatch(updateTypes("category", ""))
    dispatch(updateTypes("price", ""))
    dispatch(updateTypes("taste", ""))
    dispatch(updateTypes("alcohol", ""))
    console.log(state.types); 
  };

  window.onscroll = async (e: any) => {
    if (!isFiltered) {
      try {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          let infinityScroll = await axios.get(
            `http://localhost:8080/drinks/list/${drinkList.length}`
          );
          let { data } = infinityScroll;
          console.log(data);
          setDrinkList(drinkList.concat(data));
        }
      } catch (error) {
        console.log('no more');
      }
    } else {
      try {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
          let infinityScroll = await axios.post(
            `http://localhost:8080/drinks/list/type/${drinkList.length}`,
            {
              ...state.types,
            }
          );
          let { data } = infinityScroll;
          console.log(data);
          setDrinkList(drinkList.concat(data));
        }
      } catch (error) {
        console.log('no more');
      }
    }  
    // newFeed();
  };

  // let newFeed = async () =>{
  //   let infinityScroll = isFiltered? ( await axios.post(`http://localhost:8080/drinks/list/type`, {...state.types}) )
  //   :
  //   ( await axios.get(`http://localhost:8080/drinks/list`) )
  //   try {
  //     if((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
  //       let { data } = infinityScroll;
  //       console.log(data);
  //       setDrinkList(drinkList.concat({
  //         id: 1,
  //         drinkName: 'filter',
  //         drinkImage: 'string',
  //         alcohol: 10,
  //       }))
  //     }
  //   } catch (error) {
  //     console.log('no more')
  //   }
  // }
  // useEffect(() => {
  //   // 처음 겟요청
  // }, [drinkList])
  return (
    <div>
      <MainSelectSection
        submitHandler={submitHandler}
        selectAllHandler={selectAllHandler} />
      <MainDrinkList drinkList={drinkList} />
    </div>
  );
};
export default Main;