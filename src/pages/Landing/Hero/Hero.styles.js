import styled from "styled-components/macro";
import { media } from "../../../helpers/styles/mixins";
import { vars } from "../../../helpers/styles/variables";

export const Container = styled.section`
  height: 70vh;
  max-width: 37rem;
  padding: 0 ${vars.size.small};
  margin: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  ${media("laptop-s")} {
    max-width: 50rem;

    height: calc(100vh - 4.5rem);
  }

  ${media("laptop-l")} {
    height: 70vh;
  }

  ${media("4k")} {
    height: 50vh;
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

  filter: contrast(1.3) brightness(0.7);
  object-fit: cover;

  ${media("laptop-s")} {
    height: 100vh;
  }

  ${media("laptop-l")} {
    height: calc(70vh + 4.5rem);
  }

  ${media("4k")} {
    height: calc(50vh + 4.5rem);
  }
`;
