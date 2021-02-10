import styled, { css } from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.header`
  max-width: 100rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Sign up header */
  ${(props) =>
    props.signup &&
    css`
      height: 3rem;
      margin: -1.5rem -${vars.size.small} 0 -${vars.size.small};
      padding-left: 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `}

  ${media('tablet')} {
    height: ${(props) => props.signup && '6rem'};
  }
`;

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
`;
