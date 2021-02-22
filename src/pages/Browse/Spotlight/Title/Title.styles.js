import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  ${media('tablet')} {
    width: 60vw;
    font-size: 5vw;
  }
`;
