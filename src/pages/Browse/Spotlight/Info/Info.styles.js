import styled from 'styled-components/macro';
import { media } from '../../../../helpers/styles/mixins';
import { vars } from '../../../../helpers/styles/variables';

export const Container = styled.div`
  display: flex;
  gap: 1rem;

  font-size: ${vars.fontSize.small};
  font-weight: bold;
  color: ${vars.color.lightGrey};
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.7);
  margin-bottom: 1rem;

  h2 {
    color: ${vars.color.green};
  }

  ${media('tablet')} {
    font-size: 1rem;
  }

  ${media('laptop-s')} {
    font-size: ${vars.fontSize.responsive};
  }

  ${media('laptop-l')} {
    margin-bottom: 2vw;
  }
`;
