import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  position: relative;
  top: ${vars.size.header.mobile};

  ${media('tablet')} {
    top: ${vars.size.header.tablet};
  }

  ${media('laptop-s')} {
    position: static;
  }

  .content-wrapper {
    height: 40vh;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: ${vars.sidePadding.small};

    ${media('tablet')} {
      height: 75vh;
      padding: 2rem;
    }

    ${media('laptop-l')} {
      padding: 1.5rem 3rem;
      padding-top: 7rem;
    }
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);

  ${media('tablet')} {
    width: 60vw;
    font-size: 5vw;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1rem;

  font-size: ${vars.fontSize.small};
  font-weight: bold;
  color: ${vars.color.lightGrey};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;

  h2 {
    color: ${vars.color.green};
  }

  ${media('tablet')} {
    font-size: 1rem;
  }

  ${media('laptop-s')} {
    font-size: ${vars.fontSize.responsive};
  }

  ${media('laptop-l')} {
    margin-bottom: 2vw;
  }
`;

export const Description = styled.div`
  max-width: 40vw;
  display: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  ${media('tablet')} {
    display: block;
  }

  ${media('laptop-s')} {
    font-size: ${vars.fontSize.responsive};
  }

  ${media('laptop-s')} {
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media('tablet')} {
    margin-top: 1rem;
  }

  ${media('laptop-l')} {
    margin-top: 2vw;
  }

  svg {
    margin: 0;
    margin-right: 0.5rem;

    ${media('tablet')} {
      transform: scale(1.5);
    }

    ${media('laptop-l')} {
      margin-right: 1rem;
      transform: scale(2);
    }
  }

  button {
    width: auto;
    padding: 0.3rem 1rem;
    font-size: ${vars.fontSize.small};
    text-transform: capitalize;
    font-weight: bold;
    line-height: 0;

    ${media('tablet')} {
      font-size: 1rem;
      padding: 1.2rem 1.5rem;
    }

    ${media('laptop-l')} {
      font-size: ${vars.fontSize.responsive};
      padding: 1.7vw 2.3vw;
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

export const Background = styled.div`
  .header-overlay {
    content: '';
    width: 100%;
    height: 70vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 9%);
    display: none;

    ${media('tablet')} {
      height: 85vh;
    }

    ${media('tablet')} {
      display: block;
    }
  }

  /* LEFT SHADOW */
  &::before {
    content: '';
    width: 100%;
    height: 50vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, transparent);

    ${media('tablet')} {
      height: 85vh;
    }
  }

  /* BOTTOM SHADOW */
  &::after {
    content: '';
    width: 100%;
    height: 50vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(
      to top,
      ${vars.color.darkGrey},
      transparent 50%
    );

    ${media('tablet')} {
      height: 85vh;
    }
  }

  .img {
    height: 50vh;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -2;

    background: url(${(props) => props.img && props.img}) no-repeat center top;
    background-size: cover;

    ${media('tablet')} {
      height: 85vh;
    }
  }
`;
