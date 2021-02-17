import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  max-width: 25rem;
  display: none;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);

  ${media('tablet')} {
    display: block;
    font-size: 1.1rem;
  }
`;
