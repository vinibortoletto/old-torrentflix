import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

const H1 = styled.h1`
  font-size: ${vars.fontSize.medium};
  margin-bottom: 0.5rem;

  ${media('tablet')} {
    font-size: ${vars.fontSize.big};
  }

  ${media('laptop-s')} {
    font-size: ${vars.fontSize.large};
  }
`;

export default H1;
