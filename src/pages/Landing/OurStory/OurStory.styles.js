import styled from "styled-components/macro";
import { vars } from "../../../helpers/styles/variables";
import { media } from "../../../helpers/styles/mixins";

export const Container = styled.div`
  section {
    width: 100%;
    max-width: 83rem;

    padding: 4rem ${vars.size.small};
    margin: auto;
    text-align: center;

    ${media("laptop-s")} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-items: end;
      text-align: left;

      &.invert {
        justify-items: start;

        div:nth-child(1) {
          order: 2;
        }
      }
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 35rem;
  max-height: 20rem;
  object-fit: contain;
`;
