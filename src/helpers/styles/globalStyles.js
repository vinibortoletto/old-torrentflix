import * as styled from 'styled-components';
import { vars } from './variables';
import { media } from './mixins';

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
    position: relative;
    background-color: ${vars.color.black};
    color: ${vars.color.white};
    padding: 0 ${vars.size.small};

    ${media('tablet')} {
      padding: 0 ${vars.size.medium};
    }

    ${media('laptop-l')} {
      padding: 0 ${vars.size.big};
    }
  }

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  label[for='language'] {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
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
