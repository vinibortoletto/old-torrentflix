import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';

export const Container = styled.div`
  a {
    display: flex;
  }

  img {
    max-width: 8rem;

    ${media('laptop-s')} {
      max-width: 10rem;
    }
  }
`;
