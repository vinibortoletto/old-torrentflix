import React, { useEffect } from 'react';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import InfoIcon from '@material-ui/icons/Info';
import {
  Container,
  Background,
  Title,
  Info,
  Description,
  Buttons,
} from './Spotlight.styles';
import { Button } from '../../../components/Button/Button.styles';

import sample from '../../../images/misc/joker1.jpg';

export default function Spotlight() {
  return (
    <Container>
      <Background>
        <div className="overlay" />
        <img src={sample} alt="sample alt" />
      </Background>

      <div className="content-wrapper">
        <Title>Title</Title>

        <Info>
          <h2>2999</h2>
          <h3>14</h3>
          <h4>4 temporadas</h4>
        </Info>

        <Description>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
            delectus quos rerum! Fuga, quasi provident!
          </p>
        </Description>

        <Buttons>
          <Button small className="watch" type="button">
            <PlayArrowIcon />
            assistir
          </Button>
          <Button small className="more-info" type="button">
            <InfoIcon />
            informações
          </Button>
        </Buttons>
      </div>
    </Container>
  );
}
