import styled from "styled-components/macro";
import { vars } from "../../../helpers/styles/variables";
import { media } from "../../../helpers/styles/mixins";

export const Section = styled.section`
  width: 100%;
  text-align: center;
  padding: 3rem ${vars.padding.small};

  ${media("medium")} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: left;

    &.invert div:nth-child(1) {
      order: 2;
    }
  }
`;

export const Text = styled.div`
  h1 {
    font-size: ${vars.fontSize.medium};
    margin-bottom: 1rem;
    font-size: ${vars.fontSize.big};
  }

  h2 {
    font-weight: normal;
    font-size: ${vars.fontSize.medium};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 35rem;
  max-height: 25rem;
  object-fit: contain;
`;
