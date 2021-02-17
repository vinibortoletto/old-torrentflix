/* eslint-disable camelcase */
import React from 'react';
import { Container } from './HoverCard.styles';
import Background from './Background/Background';
import Buttons from './Buttons/Buttons';
// import Info from './Info/Info'
// import Genres from './Genres/Genres'

export default function HoverCard({ item }) {
  const { name, title } = item;
  const src = `https://image.tmdb.org/t/p/w500${item.poster_path}`;

  return (
    <Container>
      <Background src={src} alt={name || title} />

      <div className="wrapper">
        <Buttons />
      </div>
      {/* <Info /> */}
      {/* <Genres /> */}
      {/* 
      -img
      -buttons
        - play
        - watch list 
        - like
        - dislike
        - more info
      - basic info
        - score
        - age
        - length/seasons
      - genres
    */}
    </Container>
  );
}
