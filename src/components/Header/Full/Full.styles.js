import styled, { css } from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.header`
  padding: 0.5rem 1.5rem;
  max-width: 75rem;
  margin: auto;

  display: flex;
  justify-content: space-between;

  .menu-n-logo-wrapper {
    display: flex;
  }

  .search-n-nav-wrapper {
    display: flex;
  }

  ${media('tablet')} {
    padding: 1rem 2rem;
  }

  ${media('laptop-s')} {
    .search-n-nav-wrapper {
      width: 100%;
    }
  }

  ${media('laptop-s')} {
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
  }
`;
