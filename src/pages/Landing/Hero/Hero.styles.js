import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  height: 70vh;
  max-width: 37rem;
  padding: 0 ${vars.size.small};
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media('laptop-s')} {
    max-width: 50rem;

    height: calc(100vh - 4.5rem);
  }

  ${media('laptop-l')} {
    height: 70vh;
  }

  ${media('4k')} {
    height: 50vh;
  }
`;
