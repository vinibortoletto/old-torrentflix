import * as styled from "styled-components";
import { vars } from "./variables";
import { media } from "./mixins";

export const GlobalStyles = styled.createGlobalStyle`
  html {
    font-size: 100%;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
    line-height: 1.3;
    color: inherit;
    font-family: ${vars.fontFamily.openSans};
    border: none;
    font-size: 1.1rem;
  }

  body {
    background-color: ${vars.color.black};
    padding: 1.5rem 5vw 0 5vw;
    color: ${vars.color.white};

    ${media("xlarge")} {
      padding-left: 18vw;
      padding-right: 18vw;
    }
  }

  button,
  a {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  ul {
    list-style: none;
  }
`;
