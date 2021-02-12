import styled, { css } from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    padding: 1.2rem 1rem 0.6rem 1rem;
    border-radius: ${vars.borderRadius.small};
    font-size: 1rem;
    color: ${vars.color.black};
    background-color: ${vars.color.white};

    /* Dark input */
    ${(props) =>
      props.dark &&
      css`
        color: ${vars.color.white};
        background-color: ${vars.color.grey};
      `}
  }

  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    padding-left: 1rem;
    color: ${vars.color.lightGrey};

    pointer-events: none;
    transition: 0.2s ease;

    font-size: ${vars.fontSize.small};

    &.active {
      padding-top: 0.2rem;
      font-size: ${vars.fontSize.small};
      top: 0;
      transform: translateY(0);
    }
  }

  ${media('tablet')} {
    label {
      font-size: 1rem;
    }
  }
`;

export const PasswordButton = styled.button`
  width: 3rem;
  height: 100%;

  position: absolute;
  top: 0;
  right: 0;
  margin: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: transparent;

  svg {
    color: ${vars.color.lightGrey};
    pointer-events: none;
  }
`;
