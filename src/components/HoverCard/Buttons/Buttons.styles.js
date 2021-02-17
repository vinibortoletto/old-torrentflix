import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;

  .main-buttons {
    display: flex;
    gap: 0.5rem;
  }

  button {
    width: 2.7rem;
    height: 2.7rem;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 100%;
    border: 2px solid ${vars.color.lightGrey};
    background-color: ${vars.color.grey};

    &.active {
      background-color: ${vars.color.white};
      border: 2px solid ${vars.color.white};
      svg {
        color: ${vars.color.black};
      }
    }
  }

  svg {
    color: ${vars.color.white};
  }
`;
