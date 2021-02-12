import styled, { css } from 'styled-components/macro';
import { vars } from '../../../../helpers/styles/variables';
import { media } from '../../../../helpers/styles/mixins';

export const Container = styled.div`
  display: none;
  justify-content: space-between;
  margin-left: 2rem;

  ${media('tablet')} {
    display: flex;
  }

  ${media('laptop-s')} {
    width: 100%;
  }
`;
