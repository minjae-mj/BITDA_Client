import React, { useEffect } from 'react';
import MyPageTemplate from '../../templates/MyPageTemplate';

const MyPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <MyPageTemplate />;
};

export default MyPage;
