import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  margin-bottom: 2rem;
  padding-left: ${vars.sidePadding.small};

  ${media('tablet')} {
    padding-left: ${vars.sidePadding.medium};
  }

  ${media('laptop-l')} {
    padding-left: ${vars.sidePadding.big};
  }
`;

export const Title = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;

  ${media('laptop-l')} {
    font-size: ${vars.fontSize.responsive};
  }
`;

export const List = styled.ul`
  position: relative;

  li {
    width: 15rem;
    height: 8rem;
    position: relative;
    cursor: pointer;

    ${media('laptop-l')} {
      width: 20vw;
      height: 10vw;
    }
  }

  .slick-slide {
    position: relative !important;
    margin: 0 0.15rem;
  }

  .slick-next,
  .slick-prev {
    height: 100%;
    width: 2.5rem;

    position: absolute;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);

    /* Hidden in mobile */
    display: none !important;
    ${media('laptop-s')} {
      display: block !important;
    }

    /* Hidden until row is hovered */
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease;
  }

  &:hover {
    /* Show on hover */
    .slick-next,
    .slick-prev {
      opacity: 1;
      pointer-events: all;
    }
  }

  .slick-next::before,
  .slick-prev::before {
    font-size: 4rem;
    line-height: 0;
  }

  .slick-prev {
    left: 0;
    &::before {
      content: '‹';
    }
  }
  .slick-next {
    right: 0;
    &::before {
      content: '›';
    }
  }
`;

export const CardIcon = styled.img`
  width: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 2;

  ${media('laptop-l')} {
    width: 1.5vw;
    top: 0.5vw;
    left: 0.5vw;
  }
`;

export const CardTitle = styled.span`
  width: 90%;

  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);

  text-align: center;
  font-size: ${vars.fontSize.small};
  font-weight: bold;
  transition: 0.2s ease;
  text-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);

  ${media('laptop-l')} {
    font-size: 1vw;
  }
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.3rem;

  ${media('laptop-l')} {
    width: 20vw;
    height: 10vw;
  }
`;

export const CardOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent);
  border-radius: 0.3rem;
`;
