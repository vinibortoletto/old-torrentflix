import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/Header/Header';

export default function Browse() {
  const location = useLocation();

  return (
    <>
      <Header />
      <main />
    </>
  );
}
