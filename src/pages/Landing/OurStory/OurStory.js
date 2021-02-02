import React from "react";
import { DividingLine } from "../../../components/DividingLine/DividingLine.styles";
import { landingData } from "../../../data";
import { Container, Image } from "./OurStory.styles";
import Title from "../../../components/Title/Title.styles";
import Subtitle from "../../../components/Subtitle/Subtitle.styles";

export default function OurStory() {
  return (
    <>
      {landingData.en.ourStory.map((section, index) => (
        <Container key={index}>
          <section className={section.class}>
            <div className="text">
              <Title>{section.title}</Title>
              <Subtitle>{section.subtitle}</Subtitle>
            </div>

            <div>
              <Image src={section.img} alt={section.alt} />
            </div>
          </section>
          <DividingLine />
        </Container>
      ))}
    </>
  );
}
