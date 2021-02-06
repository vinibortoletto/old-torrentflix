import styled, { css } from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';
import { Button as BaseButton } from '../Button/Button.styles';

export const Container = styled.header`
  max-width: 100rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  /* Sign up page */
  ${(props) =>
    props.signup &&
    css`
      height: 3rem;
      margin: -1.5rem -${vars.size.small} 0 -${vars.size.small};
      padding-left: 0.5rem;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    `}
`;

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 10rem;
  }

  ${media('laptop-s')} {
    max-width: 12rem;
  }
`;
