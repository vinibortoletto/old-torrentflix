import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../../helpers/styles/variables';
import { media } from '../../../../../helpers/styles/mixins';

export const List = styled.ul`
  display: none;
  align-items: center;
  gap: 0 2rem;

  li {
    line-height: 0;
  }

  a {
    font-size: ${vars.fontSize.small};
    pointer-events: all;
    transition: 0.2s ease;

    &.active {
      font-weight: bold;
      pointer-events: none;
    }

    &:hover {
      text-decoration: none;
      opacity: 0.8;
    }
  }

  ${media('laptop-s')} {
    display: flex;
  }
`;
