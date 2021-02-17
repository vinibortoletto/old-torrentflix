import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  position: relative;

  ${media('laptop-s')} {
    position: static;
  }

  .content-wrapper {
    height: 60vh;
    max-width: 80rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: auto;
    padding: 1.5rem;

    ${media('tablet')} {
      height: 75vh;
    }

    ${media('laptop-s')} {
      padding: 1.5rem 2rem;
    }
  }
`;
