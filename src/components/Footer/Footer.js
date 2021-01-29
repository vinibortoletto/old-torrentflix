import React from 'react';
import { Container, Title, List, Select, Copyright } from './Footer.styles';
import { footerData } from '../../data';

export default function Footer() {
  return (
    <Container>
      <Title>{footerData.title}</Title>

      <List>
        {footerData.navLinks.map((link, index) => (
          <li key={index}>
            <a href="/">{link}</a>
          </li>
        ))}
      </List>

      <Select>
        <label htmlFor="language" />
        <select name="language" id="language">
          <option value="br">Português</option>
          <option defaultValue value="en">
            English
          </option>
        </select>
      </Select>

      <Copyright>
        <p className="strong">Create by Vinicius Bortoletto</p>
        <p>
          This clone-app was created for study only. Image rights reserved to
          Netflix
        </p>
      </Copyright>
    </Container>
  );
}
