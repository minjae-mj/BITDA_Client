import React, { useEffect } from 'react';
import LandingTemplate from '../../templates/LandingTemplate';

const Landing = (): JSX.Element => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);
  return <LandingTemplate />;
};

export default Landing;
