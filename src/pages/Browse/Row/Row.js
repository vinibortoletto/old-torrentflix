import React from 'react';
import { Container, Title, List } from './Row.styles';

export default function Row({ list }) {
  return (
    <Container>
      <Title>{list.title}</Title>

      <List>
        {list.item.results.map((item) => (
          <li key={item.id}>
            <span>{item.name ? item.name : item.title}</span>
            <div className="overlay" />
            <img
              src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
              alt={`${item.name} poster`}
            />
          </li>
        ))}
      </List>
    </Container>
  );
}
