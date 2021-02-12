import React from 'react';
import Categories from './Categories/Categories';
import Icons from './Icons/Icons';
import { Container } from './Navigation.styles';

export default function Navigation() {
  return (
    <Container>
      <Categories />
      <Icons />
    </Container>
  );
}
