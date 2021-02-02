import React from 'react';
import Subscribe from '../../../components/Subscribe/Subscribe';
import Subtitle from '../../../components/Subtitle/Subtitle.styles';
import Title from '../../../components/Title/Title.styles';
import { useLibrary } from '../../../contexts/Library';
import { landingData } from '../../../data';
import heroImg from '../../../images/misc/hero-bg.jpg';
import { Background, Container } from './Hero.styles';

export default function Hero() {
  const { language } = useLibrary();
  const { title, subtitle, emailText } =
    language === 'en' ? landingData.en.hero : landingData.br.hero;

  return (
    <Container>
      <div>
        <Background src={heroImg} alt="a display of filmes" />
        <div className="text-wrapper">
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </div>

        <div className="subscribe-wrapper">
          <Subscribe text={emailText} />
        </div>
      </div>
    </Container>
  );
}
