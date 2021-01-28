import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTypes } from '../../actions';
import { RootState } from '../../reducers';
import MainDrinkList from '../organisms/MainDrinkList';
import MainSelectSection from '../organisms/MainSelectSection';
import server from '../../apis/server';
import styled from 'styled-components';

const StyledMainContainer = styled.div`
  padding-top: 7.2rem;
  height: auto;
`;

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

  useEffect(() => {
    selectAllHandler();
  }, []);

  let submitHandler = async () => {
    let submitTaste = await server.post(`/drinks/list/type/0`, {
      ...state.types,
    });
    let { data } = submitTaste;
    setDrinkList(data);
    setIsFiltered(true);
  };

  let selectAllHandler = async () => {
    let submitAll = await server.get(`/drinks/list/0`);
    let { data } = submitAll;
    setDrinkList(data);

    dispatch(updateTypes('category', ''));
    dispatch(updateTypes('price', ''));
    dispatch(updateTypes('taste', ''));
    dispatch(updateTypes('alcohol', ''));
    setIsFiltered(false);
  };

  window.onscroll = async (e: any) => {
    const url = window.location.href;
    if (url.includes('/drinks/list')) {
      if (!isFiltered) {
        try {
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            let infinityScroll = await server.get(
              `/drinks/list/${drinkList.length}`
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
          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            let infinityScroll = await server.post(
              `/drinks/list/type/${drinkList.length}`,
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
    }
  };
  return (
    <StyledMainContainer>
      <MainSelectSection
        submitHandler={submitHandler}
        selectAllHandler={selectAllHandler}
      />
      <MainDrinkList drinkList={drinkList} isFiltered={isFiltered} />
    </StyledMainContainer>
  );
};
export default Main;
