import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/Auth';
import { useData } from '../../contexts/Data';
import { Button } from '../Button/Button.styles';
import Input from '../Input/Input';
import { Container } from './Subscribe.styles';

export default function Subscribe({ text }) {
  const { language } = useData();
  const emailRef = useRef();
  const history = useHistory();
  const {
    currentUser,
    userEmail,
    setUserEmail,
    getEmailFromLocalStorage,
  } = useAuth();

  function goToSignUp(e) {
    e.preventDefault();
    const email = emailRef.current.value;

    setUserEmail(email);
    localStorage.setItem('email', JSON.stringify(email));
    if (email) history.push('/signup');
  }

  useEffect(() => {
    getEmailFromLocalStorage();
  }, []);

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
