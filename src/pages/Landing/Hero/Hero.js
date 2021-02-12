import React from 'react';
import Background from '../../../components/Background/Background';
import Subscribe from '../../../components/Subscribe/Subscribe';
import Subtitle from '../../../components/Subtitle/Subtitle.styles';
import Title from '../../../components/Title/Title.styles';
import { useData } from '../../../contexts/Data';
import { Container } from './Hero.styles';

export default function Hero() {
  const { data } = useData();
  const { title, subtitle, emailText } = data.hero;

  return (
    <Container>
      <div>
        <Background hero />
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
