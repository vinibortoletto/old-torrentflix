import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Button = styled.button`
  height: ${(props) => props.small && '2rem'};
  height: ${(props) => props.big && '2.5rem'};

  display: flex;
  align-items: center;

  padding: ${(props) => props.small && '0.25rem .5rem'};
  padding: ${(props) => props.big && '0.25rem 1rem'};

  background-color: ${vars.color.red};
  border-radius: ${vars.borderRadius.small};

  svg {
    width: 0.8rem;
    margin-left: 0.5rem;
  }

  ${media('small')} {
    padding: 0.25rem 1rem;
  }
`;
