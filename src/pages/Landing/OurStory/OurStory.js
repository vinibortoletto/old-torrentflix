import React from "react";
import { DividingLine } from "../../../components/DividingLine/DividingLine.styles";
import { landingData } from "../../../data";
import { Section, Text, Image } from "./OurStory.styles";

export default function OurStory() {
  return (
    <>
      {landingData.ourStory.map((section, index) => (
        <div key={index}>
          <Section className={section.class}>
            <Text>
              <h1>{section.title}</h1>
              <h2>{section.subtitle}</h2>
            </Text>

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
