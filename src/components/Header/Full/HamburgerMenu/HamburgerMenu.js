import MenuIcon from '@material-ui/icons/Menu';

import React, { useEffect } from 'react';
import { Container, Button, Shadow, Navigation } from './HamburgerMenu.styles';

export default function HamburgerMenu() {
  function toggleMenu() {
    const shadowElmt = document.getElementById('mobile-nav-shadow');
    const menuElmt = document.getElementById('mobile-nav');

    menuElmt.classList.toggle('active');
    shadowElmt.classList.toggle('active');
  }

  useEffect(() => {
    function closeMenu(e) {
      const shadowElmt = document.getElementById('mobile-nav-shadow');
      const menuElmt = document.getElementById('mobile-nav');

      if (e.target.id === shadowElmt.id) {
        shadowElmt.classList.toggle('active');
        menuElmt.classList.toggle('active');
      }
    }

    window.addEventListener('click', closeMenu);
    return () => window.removeEventListener('click', closeMenu);
  }, []);

  return (
    <Container>
      <Button onClick={toggleMenu} type="button">
        <MenuIcon />
      </Button>

      <Shadow id="mobile-nav-shadow" />

      <Navigation id="mobile-nav">
        <ul className="settings">
          <li className="active">Nome do perfil</li>
          <li>Conta</li>
          <li>Sair da Netflix</li>
        </ul>

        <ul className="sections">
          <li>Início</li>
          <li>Minha Lista</li>
          <li>Séries</li>
          <li>Filmes</li>
          <li>Em alta</li>
          <li>Originais Netflix</li>
          <li>Populares</li>
        </ul>

        <ul className="genres">
          <li>Ação</li>
          <li>Comédia</li>
          <li>Terror</li>
          <li>Romântico</li>
          <li>Documentário</li>
        </ul>
      </Navigation>
    </Container>
  );
}
