import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import React from "react";
import { Button } from "../../../components/Button/Button.styles";
import Input from "../../../components/Input/Input";
import { landingData } from "../../../data";
import heroImg from "../../../images/misc/hero-bg.jpg";
import { Background, Container, Email } from "./Hero.styles";
import Title from "../../../components/Title/Title.styles";
import Subtitle from "../../../components/Subtitle/Subtitle.styles";

export default function Hero() {
  return (
    <Container>
      <Background src={heroImg} alt="a display of filmes" />
      <div className="text-wrapper">
        <Title>{landingData.en.hero.title}</Title>
        <Subtitle>{landingData.en.hero.subtitle}</Subtitle>
      </div>

      <Email>
        <h3>{landingData.en.hero.emailText}</h3>
        <form>
          <Input label="Email address" name="email" type="email" required />
          <Button type="submit" big>
            GET STARTED
            <ArrowForwardIosIcon />
          </Button>
        </form>
      </Email>
    </Container>
  );
}
