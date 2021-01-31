import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateTypes } from '../../actions';
import { RootState } from '../../reducers';
import MainDrinkList from '../organisms/MainDrinkList';
import MainSelectSection from '../organisms/MainSelectSection';
import LoadingModal from '../molecules/LoadingModal';
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
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    selectAllHandler();
  }, []);

  let submitHandler = async () => {
    setIsLoading(true);
    let submitTaste = await server.post(`/drinks/list/type/0`, {
      ...state.types,
    });
    let { data } = submitTaste;
    setIsLoadingDone(false);
    setDrinkList(data);
    setIsLoading(false);
    setIsFiltered(true);
  };

  let selectAllHandler = async () => {
    setIsLoading(true);
    let submitAll = await server.get(`/drinks/list/0`);
    let { data } = submitAll;
    setDrinkList(data);
    setIsLoadingDone(false);
    dispatch(updateTypes('category', ''));
    dispatch(updateTypes('price', ''));
    dispatch(updateTypes('taste', ''));
    dispatch(updateTypes('alcohol', ''));
    setIsLoading(false);
    setIsFiltered(false);
  };

  window.onscroll = async (e: any) => {
    const url = window.location.href;
    if (url.includes('/drinks/list')) {
      setIsLoading(true);
      if (!isLoadingDone) {
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

              if (!data.length) {
                setIsLoadingDone(true);
              }
              setDrinkList(drinkList.concat(data));
            }
          } catch (error) {
            console.log(error);
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
              if (!data.length) {
                setIsLoadingDone(true);
              }
              setDrinkList(drinkList.concat(data));
            }
          } catch (error) {
            console.log(error);
          }
        }
      }
      setIsLoading(false);
    }
  };
  return (
    <StyledMainContainer>
      {isLoading && <LoadingModal />}

      <MainSelectSection
        submitHandler={submitHandler}
        selectAllHandler={selectAllHandler}
      />
      <MainDrinkList drinkList={drinkList} isFiltered={isFiltered} />
    </StyledMainContainer>
  );
};
export default Main;
