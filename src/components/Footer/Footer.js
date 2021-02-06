import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useData } from '../../contexts/Data';
import {
  Container,
  Copyright,
  Navigation,
  Select,
  Title,
} from './Footer.styles';
import { vars } from '../../helpers/styles/variables';

export default function Footer() {
  const location = useLocation();
  const { language, setLanguage, data } = useData();
  const { title, navLinks, copyright } = data.footer;

  function changeLanguage() {
    const selectElmt = document.getElementById('language');
    setLanguage(selectElmt.value);
    localStorage.setItem('language', JSON.stringify(selectElmt.value));

    window.scrollTo(0, 0);
    window.location.reload();
  }

  useEffect(() => {
    // Change footer background color
    const footerElmt = document.querySelector('footer');
    if (location.pathname.includes('login'))
      footerElmt.style.backgroundColor = 'rgba(0,0,0, 0.5)';
    if (location.pathname.includes('signup'))
      footerElmt.style.backgroundColor = 'rgba(0,0,0, 0.05)';
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
