/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useData } from '../../../contexts/Data';
import { useLibrary } from '../../../contexts/Library';
import { Container } from './Spotlight.styles';

// Components
import Loading from '../../../components/Loading/Loading';
import Background from './Background/Background';
import Title from './Title/Title';
import Info from './Info/Info';
import Description from './Description/Description';
import Buttons from './Buttons/Buttons';

export default function Spotlight() {
  const { language } = useData();
  const { spotlight, loading, setLoading } = useLibrary();
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
      {!loading && spotlight ? (
        <>
          <Background img={img} />

          <div className="content-wrapper">
            <Title title={spotlight.name} />

            <Info
              score={spotlight.vote_average}
              year={year}
              seasons={seasons}
            />

            <Description description={description} />

            <Buttons />
          </div>
        </>
      ) : (
        <Loading app />
      )}
    </Container>
  );
}
