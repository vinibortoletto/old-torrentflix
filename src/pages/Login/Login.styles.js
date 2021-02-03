import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Header = styled.header`
  max-width: 120rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;

  ${media('tablet')} {
    height: 6rem;
  }
`;

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 16rem;
  }
`;

export const Main = styled.main`
  margin-bottom: 6rem;
  padding: 0 ${vars.size.small};

  h1 {
    margin: 1rem 0 2rem 0;
    /* padding: 0 ${vars.size.small}; */

    ${media('tablet')} {
      font-size: ${vars.fontSize.medium};
    }
  }

  hr {
    width: 100%;
    height: 1px;
    position: absolute;
    left: 0;
    background-color: ${vars.color.lightGrey};
    /* margin: 0 -10vw; */

    ${media('tablet')} {
      display: none;
    }
  }

  ${media('tablet')} {
    max-width: 28rem;
    margin: auto;
    margin-bottom: 6rem;

    background: rgba(0, 0, 0, 0.5);
    padding: 2rem;
  }
`;

export const Facebook = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

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
  margin-bottom: 7rem;

  p {
    color: ${vars.color.lightGrey};
  }

  a {
    color: ${vars.color.white};
  }
`;
