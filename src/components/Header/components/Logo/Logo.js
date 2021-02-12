import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.styles';
import logo from '../../../images/misc/logo.png';

export default function Header({ landing, signup, login, full }) {
  return (
    <Link to="/">
      <Logo
        landing={landing}
        signup={signup}
        login={login}
        full={full}
        src={logo}
        alt="torrentflix logo"
      />
    </Link>
  );
}
