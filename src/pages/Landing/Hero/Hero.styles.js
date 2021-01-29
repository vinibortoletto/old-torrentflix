import styled from 'styled-components/macro';
import { vars } from '../../../helpers/styles/variables';
import { media } from '../../../helpers/styles/mixins';

export const Container = styled.section`
  height: 70vh;
  max-width: 45rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media('medium')} {
    height: calc(100vh - 4.5rem);
  }
`;

export const Background = styled.img`
  height: calc(70vh + 4.5rem);
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  filter: brightness(0.7);
  object-fit: cover;

  ${media('medium')} {
    height: 100vh;
  }
`;

export const Title = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: ${vars.fontSize.medium};
    margin-bottom: 0.5rem;
  }

  h2 {
    font-weight: normal;
  }

  ${media('small')} {
    h1 {
      font-size: ${vars.fontSize.big};
    }

    h2 {
      font-size: ${vars.fontSize.medium};
    }
  }
`;

export const Email = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h3 {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  .input_container {
    width: 100%;
  }

  input {
    margin-bottom: 0.5rem;
  }

  button {
    margin: auto;
  }

  ${media('small')} {
    .input_container {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    input {
      margin-bottom: 0;
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      height: 100%;
      width: 22rem;

      display: flex;
      justify-content: center;
      font-size: 1.5rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  ${media('medium')} {
    input {
      height: 4rem;
    }
  }
`;
