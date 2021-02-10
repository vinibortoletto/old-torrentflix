import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';

export const ErrorMessage = styled.div`
  background-color: ${vars.color.warning};
  padding: 1rem 0.6rem;
  border-radius: ${vars.borderRadius.small};
  margin-bottom: 1rem;
  font-size: ${vars.fontSize.small};

  span {
    font-weight: bold;
  }
`;
