import React from 'react';
import { Image } from './Background.styles';
import img from '../../images/misc/bg.jpg';
import { useData } from '../../contexts/Data';

export default function Background({ hero }) {
  const { language } = useData();
  return (
    <>
      <Image
        hero={hero}
        src={img}
        alt={
          language === 'en'
            ? 'netflix movies and shows'
            : 'filmes e séries do netflix'
        }
      />
    </>
  );
}
