import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import SearchIcon from '@material-ui/icons/Search';
import { Container } from './Full.styles';

import { useData } from '../../../contexts/Data';
import user from '../../../images/users/1.png';

import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import Logo from './Logo/Logo';
import Navigation from './Navigation/Navigation';
import Search from './Search/Search';

export default function Header({ landing, signup, login, full }) {
  const location = useLocation();
  const { language, data } = useData();
  const searchRef = useRef();

  useEffect(() => {
    // Toggle active category
    const aElmts = document.querySelectorAll('.categories a');

    aElmts.forEach((a) => {
      if (location.pathname.includes(a.id)) a.classList.add('active');
      else a.classList.remove('active');
    });
  }, [location]);

  useEffect(() => {
    function toggleHeaderBg() {
      const header = document.querySelector('header');
      if (window.scrollY > 50) header.classList.add('active');
      else header.classList.remove('active');
    }

    window.addEventListener('scroll', toggleHeaderBg);
    return () => window.removeEventListener('scroll', toggleHeaderBg);
  }, []);

  return (
    <Container className={signup && 'signup'} signup={signup}>
      <div className="menu-n-logo-wrapper">
        <HamburgerMenu />
        <Logo />
      </div>

      <div className="search-n-nav-wrapper">
        <Search />
        <Navigation />
      </div>
    </Container>
  );
}
