import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '../Button/Button.styles';
import Input from '../Input/Input';
import { useData } from '../../contexts/Data';
import { Container } from './Subscribe.styles';

export default function Subscribe({ text }) {
  const { language } = useData();
  const emailRef = useRef();
  const history = useHistory();

  function goToSignUp(e) {
    e.preventDefault();
    if (emailRef.current.value) history.push('/signup');
  }

  return (
    <Container>
      <h3>{text}</h3>
      <form onSubmit={goToSignUp}>
        <Input
          label={language === 'en' ? 'Email address' : 'Email'}
          name="email"
          id="email"
          type="email"
          required
          inputRef={emailRef}
        />
        <Button type="submit" big>
          {language === 'en' ? 'GET STARTED' : 'VAMOS LÁ'}
          <ArrowForwardIosIcon />
        </Button>
      </form>
    </Container>
  );
}
