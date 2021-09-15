import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../../helpers/styles/variables';
import { media } from '../../../../../helpers/styles/mixins';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 2rem;

  ${media('laptop-s')} {
    /* display: block; */
  }

  li {
    /* line-height: 0; */
    position: relative;
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

    &:hover .profile-dropdown-menu {
      opacity: 1;
      pointer-events: all;
    }

    img {
      width: 2rem;
      border-radius: ${vars.borderRadius.small};
    }

    ${media('tablet')} {
      display: block;
    }
  }
`;

export const ProfileDropdownMenu = styled.div`
  /* Invisible by default */
  opacity: 0;
  transition: 0.3s ease-out;
  pointer-events: none;

  width: 12rem;
  position: absolute;
  right: 0;
  top: 3rem;

  background-color: ${vars.color.black};
  border: 1px solid ${vars.color.grey};
  border-radius: ${vars.borderRadius.small};
  padding: 1rem;
  font-size: ${vars.fontSize.small};

  /* Empty space between button & menu for the menu to stay open when hovering it */
  &::before {
    content: '';
    height: 3rem;
    width: 100%;
    position: absolute;
    left: 0;
    top: -2rem;
  }

  &.show {
    opacity: 1;
    pointer-events: all;
  }

  ul {
    display: grid;
    gap: 1rem;
  }

  #primary-menu {
    margin-bottom: 1rem;
  }

  img {
    margin-right: 0.5rem;
  }

  hr {
    height: 1px;
    margin: 1.5rem -1rem;
    background-color: ${vars.color.grey};
  }

  #secondary-menu {
    font-weight: bold;
  }
`;
