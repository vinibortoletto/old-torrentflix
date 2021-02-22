import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  position: relative;

  ${media('laptop-s')} {
    position: static;
  }

  .content-wrapper {
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: ${vars.sidePadding.small};

    ${media('tablet')} {
      height: 75vh;
      padding: 2rem;
    }

    ${media('laptop-l')} {
      padding: 1.5rem 3rem;
    }
  }
`;
