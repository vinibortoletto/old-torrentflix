import styled from "styled-components/macro";
import { vars } from "../../../helpers/styles/variables";
import { media } from "../../../helpers/styles/mixins";

export const Container = styled.section`
  height: 70vh;
  max-width: 22rem;
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media("small")} {
    max-width: 40rem;
  }

  ${media("medium")} {
    height: calc(100vh - 4.5rem);
  }

  .text-wrapper {
    margin-bottom: 2rem;
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

  ${media("medium")} {
    height: 100vh;
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

  form {
    width: 100%;
  }

  button {
    margin: 0.5rem auto auto auto;
  }

  ${media("small")} {
    form {
      display: flex;

      & > div {
        height: 4rem;
      }
    }

    input {
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
      margin: 0;
    }

    h3 {
      font-size: 1.2rem;
    }
  }

  ${media("medium")} {
    /* input {
      height: 4rem;
    } */
  }
`;
