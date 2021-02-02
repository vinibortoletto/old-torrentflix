import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Header = styled.header`
  max-width: 120rem;
  height: 4rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem ${vars.size.small} 0 ${vars.size.small};
  margin: auto;
`;

export const Logo = styled.img`
  width: 80%;
  max-width: 10rem;

  ${media('tablet')} {
    width: 100%;
  }
`;

export const Main = styled.main`
  h1 {
    margin: 1rem 0 2rem 0;
    padding: 0 ${vars.size.small};
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: ${vars.color.lightGrey};
  }
`;

export const Facebook = styled.div`
  display: flex;
  align-items: center;
  padding: 0 ${vars.size.small};
  margin-bottom: 2rem;

  img {
    width: 1.5rem;
    margin-right: 0.5rem;
  }

  p {
    font-size: ${vars.fontSize.small};
    color: ${vars.color.lightGrey};
  }
`;

export const Signup = styled.div`
  padding: 0 ${vars.size.small};
  margin-bottom: 7rem;

  p {
    color: ${vars.color.lightGrey};
  }

  a {
    color: ${vars.color.white};
  }
`;
