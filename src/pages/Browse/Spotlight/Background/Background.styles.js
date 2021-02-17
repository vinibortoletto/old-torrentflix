import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  .header-overlay {
    content: '';
    width: 100%;
    height: 70vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent 9%);

    ${media('tablet')} {
      height: 85vh;
    }
  }

  &::before {
    content: '';
    width: 100%;
    height: 70vh;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;

    background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 20%, transparent);

    ${media('tablet')} {
      height: 85vh;
    }
  }

  &::after {
    content: '';
    width: 100%;
    height: 70vh;

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
    height: 70vh;
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
