import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Logo } from './Header.styles';
import { Button } from '../../../components/Button/Button.styles';

import logo from '../../../images/misc/logo.png';
import { useLibrary } from '../../../contexts/Library';

export default function Header() {
  const { language } = useLibrary();

  return (
    <Container>
      <Link to="/">
        <Logo src={logo} alt="torrentflix logo" />
      </Link>

      <Link to="/login">
        <Button small>{language === 'en' ? 'Sign in' : 'Entrar'}</Button>
      </Link>
    </Container>
  );
}
