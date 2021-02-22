import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Section = styled.section`
  padding: 4rem 0;

  h1 {
    text-align: center;
    margin-bottom: 2rem;
  }

  .subscribe-wrapper {
    max-width: 40rem;
    margin: auto;
    margin-top: 3rem;
    padding: 0 ${vars.sidePadding.small};

    ${media('tablet')} {
      padding: 0;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 1.3rem 1.5rem;
  margin-bottom: 1px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${vars.color.grey};
  color: ${vars.color.white};

  svg {
    transition: 0.2s ease;

    &.active {
      transform: rotate(45deg) scale(1.5);
    }
  }

  ${media('laptop-s')} {
    font-size: ${vars.fontSize.medium};

    svg {
      transform: scale(1.5);
    }
  }
`;

export const List = styled.ul`
  max-width: 35rem;
  margin: auto;

  ${media('laptop-s')} {
    max-width: 50rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  div {
    padding: 0;
    margin: 0;

    background-color: ${vars.color.grey};

    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease;

    &.active {
      max-height: 1200px;
      pointer-events: all;
    }
  }

  p {
    padding: 2rem;

    &:nth-child(2) {
      padding-top: 0;
    }

    ${media('laptop-s')} {
      font-size: ${vars.fontSize.medium};
    }
  }
`;
