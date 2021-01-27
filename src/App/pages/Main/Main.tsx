import React, { useEffect } from 'react';
import MainTemplate from '../../templates/MainTemplate';

let SelectMyDrink = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return (
    <div>
      <MainTemplate />
    </div>
  );
};

export default SelectMyDrink;
