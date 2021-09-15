import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../../helpers/styles/variables';
import { media } from '../../../../../helpers/styles/mixins';

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 1.5rem;

  li {
    position: relative;
  }

  .search {
    display: flex;
  }

  .notification {
    display: none;

    ${media('tablet')} {
      display: block;
    }
  }

  svg {
    fill: ${vars.color.white};
    transform: scale(1.1);
  }

  .notification:hover .notification-menu {
    opacity: 1;
    pointer-events: all;
  }

  .profile {
    &:hover .profile-menu {
      opacity: 1;
      pointer-events: all;
    }

    img {
      width: 2rem;
      border-radius: ${vars.borderRadius.small};
    }
  }
`;

export const Menu = css`
  position: absolute;
  right: 0;
  top: 3.5rem;

  background-color: ${vars.color.black};
  border: 1px solid ${vars.color.grey};
  border-radius: 0.5rem 0 0.5rem 0.5rem;
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

  /* Invisible by default */
  opacity: 0;
  transition: 0.3s ease-out;
  pointer-events: none;
`;

export const ProfileMenu = styled.div`
  ${Menu};
  width: 12rem;

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

export const NotificationMenu = styled.div`
  ${Menu}
  width: 25rem;
  font-size: 1rem;
  padding: 1rem 0;

  li {
    display: flex;

    &:nth-child(1) {
      border-bottom: 1px solid ${vars.color.grey};
      padding-bottom: 1rem;
    }

    &:nth-child(2) {
      padding-top: 1rem;
    }
  }

  img {
    padding-left: 1rem;
    object-fit: contain;
    margin-right: 1rem;
  }

  h2 {
    margin-top: 0.5rem;
    font-size: ${vars.fontSize.small};
    color: ${vars.color.lightGrey};
  }
`;
