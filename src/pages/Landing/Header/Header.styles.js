import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.header`
  max-width: 100rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  button {
    height: 1.7rem;
    font-size: 0.9rem;
  }

  ${media('tablet')} {
    button {
      height: 2rem;
      font-size: 1.1rem;
    }
  }
`;

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 10rem;
  }

  ${media('laptop-s')} {
    max-width: 12rem;
  }
`;
