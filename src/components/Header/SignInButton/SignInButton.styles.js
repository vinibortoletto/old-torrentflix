import styled, { css } from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';
import { Button as BaseButton } from '../../Button/Button.styles';

export const Button = styled(BaseButton)`
  height: 1.7rem;
  font-size: 0.9rem;
  margin: auto;

  ${media('tablet')} {
    height: 2rem;
    font-size: 1.1rem;
  }

  /* Sign up page */
  ${(props) =>
    props.signup &&
    css`
      background-color: transparent;
      font-weight: bold;
      color: ${vars.color.black};

      &:hover {
        text-decoration: underline;
      }
    `}
`;
