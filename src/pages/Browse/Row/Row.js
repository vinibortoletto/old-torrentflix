import React from 'react';

// Slider
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import {
  Container,
  List,
  Title,
  CardIcon,
  CardTitle,
  CardImg,
  CardOverlay,
} from './Row.styles';
import icon from '../../../images/misc/icon.png';
import HoverCard from '../../../components/HoverCard/HoverCard';
import { useLibrary } from '../../../contexts/Library';

export default function Row({ list }) {
  const { spotlight, loading } = useLibrary();

  const settings = {
    className: 'slider variable-width',
    slidesToShow: 1,
    slidesToScroll: 5,
    variableWidth: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <Title>{list.title}</Title>

      <List>
        <Slider {...settings}>
          {list.item.results.map((item) => (
            <li key={item.id}>
              {/* <HoverCard item={item} /> */}

              {list.title.includes('netflix') && (
                <CardIcon src={icon} alt="torrentflix logo" />
              )}

              <CardTitle>{item.name || item.title}</CardTitle>
              <CardOverlay className="overlay" />
              <CardImg
                src={`https://image.tmdb.org/t/p/w300${item.backdrop_path}`}
                alt={`${item.name} poster`}
              />
            </li>
          ))}
        </Slider>

        {/* {spotlight && (
          <li>
            <HoverCard item={spotlight} />

            {list.title.includes('netflix') && (
              <CardIcon src={icon} alt="torrentflix logo" />
            )}

            <CardTitle>{spotlight.name || spotlight.title}</CardTitle>
            <CardOverlay className="overlay" />
            <CardImg
              src={`https://image.tmdb.org/t/p/w300${spotlight.backdrop_path}`}
              alt={`${spotlight.name} poster`}
            />
          </li>
        )} */}
      </List>
    </Container>
  );
}
