import React from "react";
import Title from "../../../components/Title/Title.styles";
import { Section, List, Button } from "./FAQ.styles";
import { landingData } from "../../../data";
import AddIcon from "@material-ui/icons/Add";

export default function FAQ() {
  function toggleText(e) {
    const textElmt = e.target.parentNode.childNodes[1];
    textElmt.classList.toggle("active");
  }

  return (
    <Section>
      <Title>{landingData.en.faq.title}</Title>
      <List>
        {landingData.en.faq.questions.map((question, index) => (
          <li key={index}>
            <Button type="button" onClick={toggleText}>
              {question.title}
              <AddIcon />
            </Button>
            <div>
              {Array.isArray(question.answer) ? (
                question.answer.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                <p>{question.answer}</p>
              )}
            </div>
          </li>
        ))}
      </List>
    </Section>
  );
}
