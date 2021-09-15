import styled, { css } from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  padding: 0.5rem 1.5rem;
  display: flex;
  justify-content: space-between;
  background: ${vars.color.darkGrey};

  .menu-n-logo-wrapper {
    display: flex;
  }

  .nav-wrapper {
    display: flex;
  }

  ${media('tablet')} {
    padding: 1rem 2rem;
  }

  ${media('laptop-s')} {
    background: transparent;
    transition: 0.2s ease;

    &.active {
      background: ${vars.color.darkGrey};
    }

    .nav-wrapper {
      width: 100%;
    }
  }

  ${media('laptop-l')} {
    padding: 1rem 3rem;
  }
`;
