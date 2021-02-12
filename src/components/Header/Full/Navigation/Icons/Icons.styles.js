import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../../helpers/styles/variables';
import { media } from '../../../../../helpers/styles/mixins';

export const List = styled.div`
  display: flex;
  align-items: center;
  gap: 0 2rem;

  ${media('laptop-s')} {
    /* display: block; */
  }

  li {
    line-height: 0;
    display: none;

    ${media('laptop-s')} {
      display: block;
    }
  }

  svg {
    transform: scale(1.1);
  }

  .profile {
    display: none;

    img {
      width: 2rem;
      border-radius: ${vars.borderRadius.small};
    }

    ${media('tablet')} {
      display: block;
    }
  }
`;
