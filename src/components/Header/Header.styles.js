import styled, { css } from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

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

export const HamburgerMenu = styled.button`
  background-color: transparent;

  svg {
    transform: scale(1.4);
  }
`;

export const Search = styled.form`
  input {
    height: 2rem;
    width: 6rem;

    margin-left: 1rem;
    padding: 0.5rem;
    background: ${vars.color.grey};
    border: 1px solid ${vars.color.lightGrey};
  }

  ${media('tablet')} {
    input {
      width: 10rem;
    }
  }
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 2rem;

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

  .categories {
  }

  svg {
    transform: scale(1.3);
  }

  img {
    width: 2rem;
    border-radius: ${vars.borderRadius.small};
  }
`;
