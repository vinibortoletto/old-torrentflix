import React from 'react';
import Header from '../../components/Header/Header';
import { useLibrary } from '../../contexts/Library';
import { Main } from './Browse.styles';
import Row from './Row/Row';
import Spotlight from './Spotlight/Spotlight';

export default function Browse() {
  const { libraryRows, spotlight } = useLibrary();

  return (
    <>
      <Header />

      <Main>
        <Spotlight />
        <div className="row-wrapper">
          {libraryRows.map((list, index) => (
            <Row key={index} list={list} />
          ))}

          {/* <Row list={libraryRows[0]} /> */}
        </div>
      </Main>
    </>
  );
}
