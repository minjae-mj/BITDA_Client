import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import DrinkDescContainer from '../molecules/DrinkDescContainer';
import BtnWithEvent from '../atoms/BtnWithEvent';
import BtnPlain from '../atoms/BtnPlain';
import server from '../../apis/server';
import FooterStamp from '../atoms/FooterStamp';
import LoadingModal from '../molecules/LoadingModal';

interface Params {
  drinkId: string;
}

interface DrinkInfo {
  id: string;
  drinkName: string;
  type: string;
  price: string;
  taste: string;
  ingredient: string;
  alcohol: string;
  origin: string;
  url: string;
  desc: string;
  drinkImage: string;
  bookmark: boolean | null;
}

const DrinkDesc = (): JSX.Element => {
  const isLogin = localStorage.getItem('isLogin');
  const accessToken = localStorage.getItem('accessToken');
  const [isLoading, setIsLoading] = useState(false);
  const { drinkId }: Params = useParams();
  const [drink, setDrink] = useState<DrinkInfo>({
    id: '',
    drinkName: '',
    type: '',
    price: '',
    taste: '',
    ingredient: '',
    alcohol: '',
    origin: '',
    url: '',
    desc: '',
    drinkImage: '',
    bookmark: null,
  });

  useEffect(() => {
    if (accessToken) {
      setIsLoading(true);
      server({
        method: 'get',
        url: `/drinks/detail/${drinkId}`,
        headers: { Authorization: `Bearer ${accessToken}` },
      })
        .then((res) => setDrink(res.data))
        .then(() => {
          setIsLoading(false);
        });
    } else {
      setIsLoading(true);
      server({
        method: 'get',
        url: `/drinks/detail/${drinkId}`,
      })
        .then((res) => setDrink(res.data))
        .then(() => {
          setIsLoading(false);
        });
    }
  }, []);

  const handleRedirect = () => {
    window.open(drink.url, '_blank');
  };

  const handleAddBookmark = async () => {
    if (!accessToken) {
      return alert('로그인 해 주세요.');
    }else {
      try{
        let addBookmark = await server.post(
          '/drinks/like',
          { drinkId },
          { headers: { Authorization: `Bearer ${accessToken}` } }
        ).then(()=>window.location.reload())
      }catch(err){
        console.log(err)
      }
    }
  };

  const handleRemoveBookmark = async () => {
    try{
      let removeBookmark = await server.post(
        '/drinks/unlike',
        { drinkId },
        { headers: { Authorization: `Bearer ${accessToken}` } }
      )
      .then(()=>window.location.reload())
    }catch(err){
      console.log(err)
    }
    
  };

  return (
    <StyleDrinkDesc>
      {isLoading && <LoadingModal />}
      <StyleImageBox>
        <StyleImage src={drink.drinkImage} />
        {isLogin && drink.bookmark ? (
          <StyleHeartIcon>
            <StyleStamp>
              <FooterStamp />
            </StyleStamp>
          </StyleHeartIcon>
        ) : (
          ''
        )}
      </StyleImageBox>
      <StyleDrinkDescBox>
        <DrinkDescContainer drink={drink} />
        <StyleButtonContainer>
          <BtnPlain text="구매하러가기" handleClick={handleRedirect} />
          {isLogin && drink.bookmark ? (
            <BtnWithEvent
              text="내 취향에서 삭제"
              handleClick={handleRemoveBookmark}
            />
          ) : (
            <BtnWithEvent
              text="내 취향으로 등록"
              handleClick={handleAddBookmark}
            />
          )}
        </StyleButtonContainer>
      </StyleDrinkDescBox>
    </StyleDrinkDesc>
  );
};

export default DrinkDesc;

const StyleDrinkDesc = styled.div`
  display: flex;
  width: 80%;
  margin: 2rem auto;
`;
const StyleImageBox = styled.div`
  position: relative;
  height: 50vh;
  flex-basis: 35%;
  text-align: center;
  padding-right: 4rem;
`;
const StyleImage = styled.img`
  border: none;
  box-shadow: var(--box-shadow);
  width: 100%;
  height: inherit;
`;
const StyleHeartIcon = styled.div`
  position: absolute;
  top: 1.7rem;
  right: 5.8rem;
`;
const StyleDrinkDescBox = styled.div`
  flex-basis: 65%;
  display: flex;
  flex-direction: column;
`;
const StyleButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
  margin-top: 1rem;
`;
const StyleStamp = styled.div`
  width: 4rem;
  height: 9rem;
`;
