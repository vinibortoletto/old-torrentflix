import styled, { css } from 'styled-components/macro';

export const Container = styled.div`
  ${(props) =>
    props.app &&
    css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `}

  img {
    animation: rotate 1s linear infinite;
    width: 2rem;
    filter: grayscale(1) invert(1);

    ${(props) =>
      props.app &&
      css`
        filter: none;
        width: 5rem;
      `}
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
