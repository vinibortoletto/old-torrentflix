import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.header`
  max-width: 100rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding: 1.5rem ${vars.size.small} 0 ${vars.size.small}; */
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
  width: 80%;
  max-width: 10rem;

  ${media('tablet')} {
    width: 100%;
  }
`;
