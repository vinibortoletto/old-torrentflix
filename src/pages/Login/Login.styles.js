import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Header = styled.header`
  max-width: 120rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem ${vars.size.small} 0 ${vars.size.small};
  margin: auto;
`;

export const Logo = styled.img`
  max-width: 8rem;

  ${media('tablet')} {
    max-width: 16rem;
  }
`;

export const Main = styled.main`
  margin-bottom: 6rem;

  h1 {
    margin: 1rem 0 2rem 0;
    padding: 0 ${vars.size.small};

    ${media('tablet')} {
      font-size: ${vars.fontSize.medium};
    }
  }

  hr {
    width: 100%;
    height: 1px;
    background-color: ${vars.color.lightGrey};

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
  padding: 0 ${vars.size.small};
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
  padding: 0 ${vars.size.small};
  margin-bottom: 7rem;

  p {
    color: ${vars.color.lightGrey};
  }

  a {
    color: ${vars.color.white};
  }
`;
