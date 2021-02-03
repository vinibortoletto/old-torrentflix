import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  height: 80vh;
  max-width: 100%;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .subscribe-wrapper {
    margin-top: -1rem;
  }

  ${media('tablet')} {
    .text-wrapper {
      width: 37rem;
      margin: auto;
    }

    .subscribe-wrapper {
      width: 45rem;
    }
  }

  ${media('laptop-l')} {
    height: 70vh;
  }

  ${media('4k')} {
    height: 50vh;
  }
`;
