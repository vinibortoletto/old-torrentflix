import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../../contexts/Data';
import logo from '../../../images/misc/logo.png';
import { Button, Container, Logo } from './Simple.styles';

export default function Header({ landing, signup, login }) {
  const { language } = useData();

  return (
    <Container
      className={signup && 'signup'}
      landing={landing}
      signup={signup}
      login={login}
    >
      <Link to="/">
        <Logo signup={signup} login={login} src={logo} alt="torrentflix logo" />
      </Link>

      <Link to="/login">
        <Button login={login} signup={signup} small>
          {language === 'en' ? 'Sign in' : 'Entrar'}
        </Button>
      </Link>
    </Container>
  );
}
