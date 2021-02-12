import React from 'react';
import { Container, Title, List } from './Row.styles';
import sample from '../../../images/misc/joker1.jpg';

export default function Row() {
  return (
    <Container>
      <Title>row title</Title>

      <List>
        <li>
          <img src={sample} alt="" />
        </li>

        <li>
          <img src={sample} alt="" />
        </li>
      </List>
    </Container>
  );
}
