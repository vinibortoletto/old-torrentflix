import React from "react";
import { Container, Title, List, Select, Copyright } from "./Footer.styles";
import { footerData } from "../../data";

export default function Footer() {
  return (
    <Container>
      <Title>{footerData.en.title}</Title>

      <List>
        {footerData.en.navLinks.map((link, index) => (
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
        <p>
          This clone-app was created for study only. Image rights reserved to
          Netflix
        </p>

        <p className="strong">Create by Vinicius Bortoletto</p>
      </Copyright>
    </Container>
  );
}
