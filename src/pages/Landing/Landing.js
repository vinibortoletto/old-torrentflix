import React from 'react';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { landingData } from '../../data';
import { Main } from './Landing.styles';
import { Button } from '../../components/Button/Button.styles';
import { Input } from '../../components/Input/Input.styles';
import { DividingLine } from '../../components/DividingLine/DividingLine.styles';
import heroImg from '../../images/misc/hero-bg.jpg';
import Hero from './Hero/Hero';

export default function Landing() {
  return (
    <Main>
      <Hero />
      <DividingLine />

      {/* Enjoy on your TV */}
      {/* Download your shows */}
      {/* Watch everywhere */}
      {/* Frequently Asked Questions */}
    </Main>
  );
}

/* 
  LANDING PAGE

    - header
      - logo
      - sign in btn
    - main
      - section-hero
        - h1
        - h2
        - h3
        - email input
      - section-
    - footer

*/
