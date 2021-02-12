import React, { useEffect } from 'react';
import Header from '../../components/Header/Header';
import Spotlight from './Spotlight/Spotlight';
import Row from './Row/Row';

export default function Browse() {
  return (
    <>
      <Header />

      <main>
        <Spotlight />
        <Row />
      </main>
    </>
  );
}
