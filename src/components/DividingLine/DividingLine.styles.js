import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const DividingLine = styled.hr`
  height: 0.6rem;
  margin: 0 -5vw;
  background-color: ${vars.color.darkGrey};

  ${media('xlarge')} {
    margin: 0 -18vw;
  }
`;
