import React from 'react';
import { Container } from './Loading.styles';
import loadingIm from '../../images/misc/spinner.png';

export default function Loading({ app }) {
  return (
    <Container app={app}>
      <img src={loadingIm} alt="loading icon" />
    </Container>
  );
}
