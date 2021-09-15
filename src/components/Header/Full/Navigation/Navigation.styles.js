import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../helpers/styles/variables';
import { media } from '../../../../helpers/styles/mixins';

export const Container = styled.div`
  justify-content: space-between;
  display: flex;

  ${media('laptop-s')} {
    margin-left: 2rem;
    width: 100%;
  }
`;
