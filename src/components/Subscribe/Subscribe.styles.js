import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 30rem;
  margin: auto;
  margin-top: 2rem;

  &,
  form {
    width: 100%;
    display: grid;
    justify-items: center;
    text-align: center;
  }

  h3 {
    font-weight: normal;
    margin-bottom: 1rem;
  }

  a:hover {
    text-decoration: none;
  }

  button {
    margin-top: 0.5rem;
  }

  ${media('laptop-s')} {
    max-width: 100%;

    h3 {
      margin-bottom: 2rem;
    }

    form {
      height: 4rem;
      display: grid;
      grid-template-columns: 60% 40%;
    }

    svg {
      transform: scale(1.5);
    }

    div,
    button {
      width: 100%;
    }

    input {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;

      margin-top: 0;
      height: 100%;

      font-size: 1.5rem;
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
  }
`;
