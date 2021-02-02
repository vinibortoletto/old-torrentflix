import React from "react";
import Title from "../../../components/Title/Title.styles";
import { Section, List, Button } from "./FAQ.styles";
import { landingData } from "../../../data";
import AddIcon from "@material-ui/icons/Add";
import Subscribe from "../../../components/Subscribe/Subscribe";

export default function FAQ() {
  function toggleText(id) {
    const textElmts = document.querySelectorAll(".faq-text");
    let textElmt;

    textElmts.forEach((elmt) => {
      if (elmt.id === id) textElmt = elmt;
    });

    textElmt.classList.toggle("active");

    const iconElmt = textElmt.previousElementSibling.childNodes[1];
    iconElmt.classList.toggle("active");
  }

  return (
    <Section>
      <Title>{landingData.en.faq.title}</Title>
      <List>
        {landingData.en.faq.questions.map((question, index) => (
          <li key={index}>
            <Button type="button" onClick={() => toggleText(index.toString())}>
              {question.title}
              <AddIcon />
            </Button>
            <div className="faq-text" id={index}>
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

      <div className="subscribe-wrapper">
        <Subscribe text={landingData.en.faq.emailText} />
      </div>
    </Section>
  );
}
