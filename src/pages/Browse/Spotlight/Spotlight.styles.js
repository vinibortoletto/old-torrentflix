import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';
import sample from '../../../images/misc/joker1.jpg';
import { Button } from '../../../components/Button/Button.styles';

export const Container = styled.div`
  position: relative;

  ${media('laptop-s')} {
    position: static;
  }

  .content-wrapper {
    height: 40vw;
    max-width: 75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    margin: auto;
    padding: 1.5rem;

    ${media('laptop-s')} {
      padding: 1.5rem 2rem;
    }
  }
`;

export const Background = styled.div`
  &::before {
    content: '';
    width: 100%;
    height: 50vw;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(to right, ${vars.color.black} 20%, transparent);
  }

  &::after {
    content: '';
    width: 100%;
    height: 50vw;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(
      to top,
      ${vars.color.darkGrey} 15%,
      transparent
    );
  }

  img {
    height: 50vw;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    object-fit: cover;
    object-position: 7vw;
  }
`;

export const Title = styled.h1`
  font-size: 6vw;
  font-weight: bold;
  text-transform: uppercase;

  ${media('tablet')} {
    font-size: 3rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;

  font-size: ${vars.fontSize.small};
  font-weight: bold;
  color: ${vars.color.lightGrey};

  ${media('tablet')} {
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: normal;
  }
`;

export const Description = styled.div`
  max-width: 25rem;
  display: none;

  ${media('tablet')} {
    display: block;
  }
`;

export const Buttons = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 1rem;
    margin: 0;
    margin-right: 0.5rem;

    ${media('tablet')} {
      width: 1.5rem;
    }
  }

  button {
    width: auto;
    padding: 0.3rem 1rem;
    font-size: ${vars.fontSize.small};
    text-transform: capitalize;
    font-weight: bold;

    ${media('tablet')} {
      font-size: 1rem;
      padding: 1.2rem 1.5rem;
    }
  }

  .watch {
    background-color: rgba(255, 255, 255, 0.8);
    color: ${vars.color.black};
  }

  .more-info {
    background-color: rgba(117, 117, 117, 0.6);
    color: white;
  }
`;
