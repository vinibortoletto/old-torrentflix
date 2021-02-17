import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Container = styled.div`
  position: absolute;
  height: 24rem;
  width: 20rem;

  top: -10rem;
  z-index: 3;
  background-color: ${vars.color.darkGrey};
  box-shadow: 0 0 10px ${vars.color.black};
  border-radius: 0.3rem;

  .wrapper {
    padding: 1rem;
  }
`;
