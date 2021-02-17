import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  &,
  img {
    width: 100%;
    height: 13rem;
    object-fit: cover;
    object-position: top;
    border-radius: 0.3rem 0.3rem 0 0;
  }
`;
