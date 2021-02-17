import React from 'react';
import {
  Container,
  List,
  Title,
  Icon,
  CardTitle,
  CardImg,
  CardOverlay,
} from './Row.styles';
import icon from '../../../images/misc/icon.png';

export default function Row({ list }) {
  return (
    <Container>
      <Title>{list.title}</Title>

      <List>
        {list.item.results.map((item) => (
          <li key={item.id}>
            {list.title.includes('netflix') && (
              <Icon src={icon} alt="torrentflix logo" />
            )}

            <CardTitle>{item.name ? item.name : item.title}</CardTitle>
            <CardOverlay className="overlay" />
            <CardImg
              src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
              alt={`${item.name} poster`}
            />
          </li>
        ))}
      </List>
    </Container>
  );
}
