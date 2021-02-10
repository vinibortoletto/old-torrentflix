import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/misc/logo.png';
import { Container, Logo } from './Header.styles';
import SignInButton from './SignInButton/SignInButton';

export default function Header({ signup, login }) {
  return (
    <Container className={signup && 'signup'} signup={signup}>
      <Link to="/">
        <Logo login={login} signup={signup} src={logo} alt="torrentflix logo" />
      </Link>

      {!login && <SignInButton signup={signup} />}
    </Container>
  );
}
