import React, { useEffect } from 'react';
import DrinkDetailTemplate from '../../templates/DrinkDetailTemplate';

const DrinkDetail = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <DrinkDetailTemplate />;
};

export default DrinkDetail;
