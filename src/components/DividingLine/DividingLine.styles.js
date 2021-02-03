import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const DividingLine = styled.hr`
  height: 0.6rem;
  background-color: ${vars.color.darkGrey};
  margin: 0 -${vars.size.small};

  ${media('tablet')} {
    margin: 0 -${vars.size.medium};
  }
  ${media('laptop-l')} {
    margin: 0 -${vars.size.big};
  }
`;
