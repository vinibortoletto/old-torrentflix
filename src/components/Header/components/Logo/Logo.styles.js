import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../helpers/styles/variables';
import { media } from '../../../../helpers/styles/mixins';

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 10rem;

    /* Login header */
    ${(props) =>
      props.login &&
      css`
        max-width: 16rem;
        margin: -1.5rem 0 0 -1.5rem;
      `}

    /* Signup header */
    max-width: ${(props) => props.signup && '16rem'};
  }

  ${media('laptop-s')} {
    max-width: ${(props) => !props.login && !props.signup && '12rem'};
  }

  ${media('4k')} {
    max-width: ${(props) => !props.login && !props.signup && '15rem'};
  }
`;
