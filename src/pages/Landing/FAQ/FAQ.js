import AddIcon from '@material-ui/icons/Add';
import React from 'react';
import Subscribe from '../../../components/Subscribe/Subscribe';
import Title from '../../../components/Title/Title.styles';
import { useLibrary } from '../../../contexts/Library';
import { landingData } from '../../../data';
import { Button, List, Section } from './FAQ.styles';

export default function FAQ() {
  const { language } = useLibrary();
  const { title, questions, emailText } =
    language === 'en' ? landingData.en.faq : landingData.br.faq;

  function toggleText(id) {
    const textElmts = document.querySelectorAll('.faq-text');
    let textElmt;

    textElmts.forEach((elmt) => {
      if (elmt.id === id) textElmt = elmt;
    });

    textElmt.classList.toggle('active');

    const iconElmt = textElmt.previousElementSibling.childNodes[1];
    iconElmt.classList.toggle('active');
  }

  return (
    <Section>
      <Title>{title}</Title>
      <List>
        {questions.map((question, index) => (
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
        <Subscribe text={emailText} />
      </div>
    </Section>
  );
}
