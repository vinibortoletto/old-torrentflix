import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    width: 1rem;
    margin: 0;
    margin-right: 0.5rem;

    ${media('tablet')} {
      width: 1.5rem;
    }
  }

  button {
    width: auto;
    padding: 0.3rem 1rem;
    font-size: ${vars.fontSize.small};
    text-transform: capitalize;
    font-weight: bold;

    ${media('tablet')} {
      font-size: 1rem;
      padding: 1.2rem 1.5rem;
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
