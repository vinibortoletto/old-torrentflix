import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/misc/logo.png';
import { Container } from './Logo.styles';

export default function Logo() {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="torrentflix logo" />
      </Link>
    </Container>
  );
}
