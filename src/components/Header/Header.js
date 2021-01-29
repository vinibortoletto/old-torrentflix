import React from 'react';

import { Container, Logo } from './Header.styles';
import { Button } from '../Button/Button.styles';

import logo from '../../images/misc/logo.png';

export default function Header() {
  return (
    <Container>
      <Logo src={logo} />
      <Button small>Sign in</Button>
    </Container>
  );
}
