import styled from "styled-components/macro";
import { vars } from "../../../helpers/styles/variables";
import { media } from "../../../helpers/styles/mixins";

export const Section = styled.section`
  padding: 3rem 0;

  h1 {
    text-align: center;
    padding: 0 ${vars.padding.small};
    margin-bottom: 2rem;
  }

  li {
    margin: 0 -${vars.padding.small} 0 -${vars.padding.small};
    margin-bottom: 0.5rem;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${vars.color.lightGrey};
  padding: 1.1rem;
  width: 100%;
`;

export const List = styled.ul`
  div {
    padding: 0;
    margin: 0;
    background-color: ${vars.color.lightGrey};

    height: 0;
    opacity: 0;
    pointer-events: none;
    transition: 0.2s ease;

    &.active {
      padding: 1.1rem;
      margin-top: 0.1rem;
      height: auto;
      opacity: 1;
      pointer-events: all;
    }
  }

  p {
    overflow: hidden;
    margin-bottom: 1rem;
  }
`;
