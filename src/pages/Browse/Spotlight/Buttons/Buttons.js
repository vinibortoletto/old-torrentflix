import InfoIcon from '@material-ui/icons/Info';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import React from 'react';
import { Button } from '../../../../components/Button/Button.styles';
import { useData } from '../../../../contexts/Data';
import { Container } from './Buttons.styles';

export default function Buttons() {
  const { language } = useData();

  return (
    <Container>
      <Button small className="watch" type="button">
        <PlayArrowIcon />
        {language === 'en' ? 'watch' : 'assistir'}
      </Button>
      <Button small className="more-info" type="button">
        <InfoIcon />
        {language === 'en' ? 'information' : 'informações'}
      </Button>
    </Container>
  );
}
