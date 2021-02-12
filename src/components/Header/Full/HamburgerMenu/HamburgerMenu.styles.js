import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';

export const Button = styled.button`
  background-color: transparent;
  margin-right: 1rem;

  svg {
    transform: scale(1.4);
  }

  ${media('laptop-s')} {
    display: none;
  }
`;
