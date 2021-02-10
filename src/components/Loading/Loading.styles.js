import styled from 'styled-components/macro';

export const Image = styled.img`
  animation: rotate 0.5s linear infinite;
  width: 2rem;
  filter: grayscale(1) invert(1);

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
