import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import React from 'react';
import { Button } from '../Button/Button.styles';
import Input from '../Input/Input';
import { useLibrary } from '../../contexts/Library';
import { Container } from './Subscribe.styles';

export default function Subscribe({ text }) {
  const { language } = useLibrary();

  return (
    <Container>
      <h3>{text}</h3>
      <form>
        <Input
          label={language === 'en' ? 'Email address' : 'Email'}
          name="email"
          id="email"
          type="email"
          required
        />
        <Button type="submit" big>
          {language === 'en' ? 'GET STARTED' : 'VAMOS LÁ'}
          <ArrowForwardIosIcon />
        </Button>
      </form>
    </Container>
  );
}
