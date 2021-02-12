import styled, { css } from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';
import { Button as BaseButton } from '../../Button/Button.styles';

export const Container = styled.header`
  max-width: ${(props) => (props.landing || props.login) && '120rem'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  /* Landing */
  ${(props) =>
    props.landing &&
    css`
      padding: 1.5rem ${vars.size.small} 0 ${vars.size.small};

      ${media('tablet')} {
        padding: 1.5rem 3rem 0 3rem;
      }
    `}

  /* Sign up */
  ${(props) =>
    props.signup &&
    css`
      padding: 0.5rem 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    `}

  /* Login */
  ${(props) =>
    props.login &&
    css`
      padding: 1rem 2vw 0 2vw;
    `}
`;

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 10rem;

    /* Login */
    ${(props) =>
      props.login &&
      css`
        max-width: 16rem;
      `}

    /* Signup */
    ${(props) =>
      props.signup &&
      css`
        max-width: 16rem;
        margin-left: 2vw;

        ${media('4k')} {
          margin-left: 18vw;
        }
      `}
  }

  ${media('laptop-s')} {
    max-width: ${(props) => !props.login && !props.signup && '12rem'};
  }

  ${media('laptop-l')} {
    max-width: 18rem;
  }
`;

export const Button = styled(BaseButton)`
  height: 1.7rem;
  font-size: 0.9rem;

  ${media('tablet')} {
    height: 2rem;
    font-size: 1.1rem;
  }

  ${(props) =>
    props.signup &&
    css`
      background-color: transparent;
      font-weight: bold;
      color: ${vars.color.black};
      margin-right: 2vw;

      &:hover {
        text-decoration: underline;
      }

      ${media('4k')} {
        margin-right: 18vw;
      }
    `}

  display: ${(props) => props.login && 'none'};
`;
