import React from "react";
import { DividingLine } from "../../../components/DividingLine/DividingLine.styles";
import { landingData } from "../../../data";
import { Section, Image } from "./OurStory.styles";
import Title from "../../../components/Title/Title.styles";
import Subtitle from "../../../components/Subtitle/Subtitle.styles";

export default function OurStory() {
  return (
    <>
      {landingData.en.ourStory.map((section, index) => (
        <div key={index}>
          <Section className={section.class}>
            <div>
              <Title>{section.title}</Title>
              <Subtitle>{section.subtitle}</Subtitle>
            </div>

            <div>
              <Image src={section.img} alt={section.alt} />
            </div>
          </Section>
          <DividingLine />
        </div>
      ))}
    </>
  );
}
