import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  ${media('tablet')} {
    margin-top: 1rem;
  }

  ${media('laptop-l')} {
    margin-top: 2vw;
  }

  svg {
    margin: 0;
    margin-right: 0.5rem;

    ${media('tablet')} {
      transform: scale(1.5);
    }

    ${media('laptop-l')} {
      margin-right: 1rem;
      transform: scale(2);
    }
  }

  button {
    width: auto;
    padding: 0.3rem 1rem;
    font-size: ${vars.fontSize.small};
    text-transform: capitalize;
    font-weight: bold;
    line-height: 0;

    ${media('tablet')} {
      font-size: 1rem;
      padding: 1.2rem 1.5rem;
    }

    ${media('laptop-l')} {
      font-size: ${vars.fontSize.responsive};
      padding: 1.7vw 2.3vw;
    }
  }

  .watch {
    background-color: rgba(255, 255, 255, 0.8);
    color: ${vars.color.black};
  }

  .more-info {
    background-color: rgba(117, 117, 117, 0.6);
    color: white;
  }
`;
