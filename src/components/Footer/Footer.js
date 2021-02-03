import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLibrary } from '../../contexts/Library';
import { footerData } from '../../data';
import {
  Container,
  Copyright,
  Navigation,
  Select,
  Title,
} from './Footer.styles';

export default function Footer() {
  const location = useLocation();
  const { language, setLanguage } = useLibrary();
  const { title, navLinks, copyright } =
    language === 'en' ? footerData.en : footerData.br;

  function changeLanguage() {
    const selectElmt = document.getElementById('language');
    setLanguage(selectElmt.value);
    localStorage.setItem('language', JSON.stringify(selectElmt.value));

    window.scrollTo(0, 0);
    window.location.reload();
  }

  useEffect(() => {
    const footerElmt = document.querySelector('footer');
    if (location.pathname.includes('login'))
      footerElmt.style.backgroundColor = 'rgba(0,0,0, 0.5)';
  }, [location]);

  return (
    <Container>
      <div className="footer-wrapper">
        <Title>{title}</Title>

        <Navigation>
          <ul>
            {navLinks.map((link, index) => (
              <li key={index}>
                <a href="/">{link}</a>
              </li>
            ))}
          </ul>
        </Navigation>

        <Select>
          <label htmlFor="language">
            {language === 'en' ? 'Language' : 'Idioma'}
          </label>

          <select
            onChange={changeLanguage}
            value={language}
            name="language"
            id="language"
          >
            <option value="en">English</option>
            <option value="br">Português</option>
          </select>
        </Select>

        <Copyright>
          <p>{copyright}</p>
          <p className="strong">
            {language === 'en'
              ? `Created by Vinicius Bortoletto`
              : `Criado por Vinicius Bortoletto`}
          </p>
        </Copyright>
      </div>
    </Container>
  );
}
