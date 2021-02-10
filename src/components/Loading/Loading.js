import React from 'react';
import { Image } from './Loading.styles';
import loadingIm from '../../images/misc/spinner.png';

export default function Loading() {
  return <Image src={loadingIm} alt="loading icon" />;
}
