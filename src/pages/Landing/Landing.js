import React from "react";
import { DividingLine } from "../../components/DividingLine/DividingLine.styles";
import FAQ from "./FAQ/FAQ";
import Hero from "./Hero/Hero";
import OurStory from "./OurStory/OurStory";

export default function Landing() {
  return (
    <main>
      <Hero />
      <DividingLine />
      <OurStory />
      <FAQ />
      <DividingLine />
    </main>
  );
}
