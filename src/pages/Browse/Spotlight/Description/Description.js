import React from 'react';
import { Container } from './Description.styles';

export default function Description({ description }) {
  return (
    <Container>
      <p>{description}</p>
    </Container>
  );
}
