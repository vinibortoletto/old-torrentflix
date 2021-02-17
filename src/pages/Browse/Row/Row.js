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
import HoverCard from '../../../components/HoverCard/HoverCard';
import { useLibrary } from '../../../contexts/Library';

export default function Row({ list }) {
  const { spotlight } = useLibrary();

  return (
    <Container>
      {/* <Title>{list.title}</Title> */}
      <Title>title</Title>

      <List>
        {/* {list.item.results.map((item) => (
          <li key={item.id}>
            <HoverCard item={item} />

            {list.title.includes('netflix') && (
              <Icon src={icon} alt="torrentflix logo" />
            )}

            <CardTitle>{item.name || item.title}</CardTitle>
            <CardOverlay className="overlay" />
            <CardImg
              src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
              alt={`${item.name} poster`}
            />
          </li>
        ))} */}

        {spotlight && (
          <li>
            <HoverCard item={spotlight} />

            {list.title.includes('netflix') && (
              <Icon src={icon} alt="torrentflix logo" />
            )}

            <CardTitle>{spotlight.name || spotlight.title}</CardTitle>
            <CardOverlay className="overlay" />
            <CardImg
              src={`https://image.tmdb.org/t/p/w300${spotlight.backdrop_path}`}
              alt={`${spotlight.name} poster`}
            />
          </li>
        )}
      </List>
    </Container>
  );
}
