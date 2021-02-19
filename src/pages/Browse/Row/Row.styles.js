import styled from 'styled-components/macro';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  /* display: flex; */
  /* gap: 0.3rem; */
  /* overflow: hidden; */

  position: relative;

  li {
    width: 15rem;
    height: 8rem;
    position: relative;
    /* cursor: pointer; */
    /* margin-right: 0.3rem; */
  }

  .slick-slide {
    /* position: relative; */
    margin: 0 0.15rem;
  }

  .slick-next,
  .slick-prev {
    position: absolute;
    z-index: 100;
    height: 8rem;

    display: none !important;
    ${media('laptop-s')} {
      display: block !important;
    }
  }
  .slick-prev {
    left: 0;
    padding-left: 0.5rem;

    &::before {
      content: '‹';
      font-size: 4rem;
      line-height: 0;
    }
  }
  .slick-next {
    right: 0;
    padding-right: 0.5rem;

    &::before {
      content: '›';
      font-size: 4rem;
      line-height: 0;
    }
  }

  .slick-slider {
    &::before,
    &::after {
      content: '';
      background: rgba(0, 0, 0, 0.8);
      width: 2.5rem;
      height: 8rem;

      position: absolute;
      z-index: 100;
      top: 0;
      z-index: 99;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    display: none;
    ${media('laptop-s')} {
      display: block;
    }
  }
`;

export const CardIcon = styled.img`
  width: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 2;
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
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s ease;
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.3rem;
`;

export const CardOverlay = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent);
`;
