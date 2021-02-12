import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Button = styled.button`
  background-color: transparent;
  margin-right: 1rem;
  color: ${vars.color.white};

  svg {
    transform: scale(1.4);
  }

  ${media('laptop-s')} {
    display: none;
  }
`;
