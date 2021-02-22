/* eslint-disable camelcase */

// ICONS
import InfoIcon from '@material-ui/icons/Info';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React, { useEffect, useState } from 'react';

// COMPONENTS
import { Button } from '../../../components/Button/Button.styles';

// CONTEXTS
import { useData } from '../../../contexts/Data';
import { useLibrary } from '../../../contexts/Library';

// STYLES
import {
  Background,
  Buttons,
  Container,
  Description,
  Info,
  Title,
} from './Spotlight.styles';

export default function Spotlight() {
  const { language } = useData();
  const { spotlight } = useLibrary();
  const [img, setImg] = useState('');
  const [year, setYear] = useState('');
  const [seasons, setSeasons] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (spotlight) {
      setImg(`https://image.tmdb.org/t/p/original${spotlight.backdrop_path}`);
      setYear(new Date(spotlight.first_air_date).getFullYear());
      setDescription(`${spotlight.overview.split('.', 1)}.`);

      if (spotlight.number_of_seasons === 1)
        setSeasons(
          `${spotlight.number_of_seasons} ${
            language === 'en' ? 'season' : 'temporada'
          }`,
        );
      else
        setSeasons(
          `${spotlight.number_of_seasons} ${
            language === 'en' ? 'seasons' : 'temporadas'
          }`,
        );
    }
  }, [spotlight]);

  return (
    <Container>
      <Background img={img}>
        <div className="header-overlay" />
        <div className="img" />
      </Background>

      <div className="content-wrapper">
        <Title>{spotlight.name}</Title>

        <Info>
          <h2>{spotlight.vote_average}</h2>
          <h3>{year}</h3>
          <h4>{seasons}</h4>
        </Info>

        <Description>{description}</Description>

        <Buttons>
          <Button small className="watch" type="button">
            <PlayArrowIcon />
            {language === 'en' ? 'watch' : 'assistir'}
          </Button>
          <Button small className="more-info" type="button">
            <InfoIcon />
            {language === 'en' ? 'information' : 'informações'}
          </Button>
        </Buttons>
      </div>
    </Container>
  );
}
