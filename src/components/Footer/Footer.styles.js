import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.footer`
  color: ${vars.color.lightGrey};
  padding: 4rem 5vw 2rem 5vw;
  margin: 0 -${vars.size.small};

  .footer-wrapper {
    max-width: 75rem;
    margin: auto;

    ${media('tablet')} {
      padding: 0 ${vars.size.medium};
    }

    ${media('laptop-l')} {
      padding: 0;
    }
  }

  h1 {
    font-weight: normal;
  }

  ${media('tablet')} {
    margin: 0 -${vars.size.small};
  }

  ${media('4k')} {
    margin: 0 -${vars.size.big};
  }
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export const Navigation = styled.nav`
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    ${media('tablet')} {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  li {
    margin-bottom: 0.7rem;
  }

  a {
    font-size: ${vars.fontSize.small};
  }
`;

export const Select = styled.div`
  margin-top: 2rem;
  position: relative;

  &::before {
    content: '🌐';
    position: absolute;
    top: 1rem;
    left: 1rem;
    filter: grayscale(1) contrast(2);
    pointer-events: none;
  }

  &::after {
    content: '▼';
    position: absolute;
    top: 1rem;
    left: 8.7rem;
    transform: scaleX(1.5) scale(0.6);
    pointer-events: none;
  }

  select {
    padding: 1rem 2rem 1rem 3rem;
    border: 1px solid rgba(117, 117, 117, 0.3);
    border-radius: ${vars.borderRadius.small};
  }
`;

export const Copyright = styled.div`
  text-align: center;
  margin-top: 2rem;

  .strong {
    color: ${vars.color.red};
    font-weight: bold;
  }

  p {
    margin-top: 1rem;
    font-size: ${vars.fontSize.small};
  }
`;
