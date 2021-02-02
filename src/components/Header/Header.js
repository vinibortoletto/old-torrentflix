import React from 'react';

import { Container, Logo } from './Header.styles';
import { Button } from '../Button/Button.styles';

import logo from '../../images/misc/logo.png';
import { useLibrary } from '../../contexts/Library';

export default function Header() {
  const { language } = useLibrary();

  return (
    <Container>
      <Logo src={logo} alt="torrentflix logo" />
      <Button small>{language === 'en' ? 'Sign in' : 'Entrar'}</Button>
    </Container>
  );
}
