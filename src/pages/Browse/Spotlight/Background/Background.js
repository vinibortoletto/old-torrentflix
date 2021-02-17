import React from 'react';
import { Container } from './Background.styles';

export default function Background({ img }) {
  return (
    <Container img={img}>
      <div className="header-overlay" />
      <div className="img" />
    </Container>
  );
}
