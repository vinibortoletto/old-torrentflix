import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../helpers/styles/variables';
import { media } from '../../../../helpers/styles/mixins';

export const Form = styled.form`
  margin-left: 1rem;

  label,
  input {
    width: 100%;
    max-width: 6rem;
  }

  input {
    height: 2rem;
    font-size: ${vars.fontSize.small};
    padding: 0.5rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid ${vars.color.lightGrey};
  }

  ${media('tablet')} {
    input {
      max-width: 10rem;
    }
  }

  ${media('laptop-s')} {
    display: none;
  }
`;
