import React from 'react';
import { Container } from './Background.styles';

export default function Background({ src, alt }) {
  return (
    <Container>
      <img src={src} alt={alt} />
    </Container>
  );
}
