import React from "react";
import Subscribe from "../../../components/Subscribe/Subscribe";
import Subtitle from "../../../components/Subtitle/Subtitle.styles";
import Title from "../../../components/Title/Title.styles";
import { landingData } from "../../../data";
import heroImg from "../../../images/misc/hero-bg.jpg";
import { Background, Container } from "./Hero.styles";

export default function Hero() {
  return (
    <Container>
      <div>
        <Background src={heroImg} alt="a display of filmes" />
        <div className="text-wrapper">
          <Title>{landingData.en.hero.title}</Title>
          <Subtitle>{landingData.en.hero.subtitle}</Subtitle>
        </div>

        <div className="subscribe-wrapper">
          <Subscribe text={landingData.en.hero.emailText} />
        </div>
      </div>
    </Container>
  );
}
