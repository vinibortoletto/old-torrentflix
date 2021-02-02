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
    color: ${vars.color.white};
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
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
