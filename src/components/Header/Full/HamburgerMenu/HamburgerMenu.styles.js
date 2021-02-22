import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${media('laptop-s')} {
    display: none;
  }
`;

export const Button = styled.button`
  background-color: transparent;
  margin-right: 1rem;
  color: ${vars.color.white};

  svg {
    transform: scale(1.4);
  }
`;

export const Shadow = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  top: ${vars.size.header.mobile};
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: 0.2s ease;
  opacity: 0;
  pointer-events: none;

  ${media('tablet')} {
    top: ${vars.size.header.tablet};
  }

  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;

export const Navigation = styled.nav`
  width: 16rem;
  height: calc(100vh - ${vars.size.header.mobile});

  position: fixed;
  top: ${vars.size.header.mobile};
  left: -100vw;
  z-index: 100;
  overflow-y: scroll;

  background: ${vars.color.darkGrey};
  padding: 1rem 0;
  transition: 0.2s ease;

  &.active {
    left: 0;
  }

  ${media('tablet')} {
    height: calc(100vh - ${vars.size.header.tablet});
    top: ${vars.size.header.tablet};
  }

  ul {
    font-weight: bold;
    color: ${vars.color.lightGrey};
  }

  li {
    padding: 0.5rem ${vars.sidePadding.small};

    &.active {
      border-left: 3px solid ${vars.color.red};
      a {
        margin-left: -3px;
      }
    }
  }

  .settings {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid ${vars.color.grey};
  }

  .sections {
    padding-top: 0.5rem;
  }
`;
