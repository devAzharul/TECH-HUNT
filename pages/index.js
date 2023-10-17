import React from 'react';
import dynamic from 'next/dynamic';
const Home = dynamic(() => import('@/pages/home'));

const index = () => {
  return (
    <>
      <Home />
    </>
  );
};

export default index;