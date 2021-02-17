import React from 'react';
import { Container } from './Info.styles';

export default function Info({ score, year, seasons }) {
  return (
    <Container>
      <h2>{score}</h2>
      <h3>{year}</h3>
      <h4>{seasons}</h4>
    </Container>
  );
}
