import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';
import { Button as BaseButton } from '../../components/Button/Button.styles';

export const Main = styled.main`
  padding: 9rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  color: ${vars.color.black};
  margin: 0 -${vars.size.small};

  div {
    margin: auto;
    max-width: 21rem;
  }
`;

export const Devices = styled.img`
  width: 16.25rem;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  h2 {
    font-size: ${vars.fontSize.small};
    text-transform: uppercase;
    font-weight: normal;
    margin-bottom: 0.5rem;

    span {
      font-weight: bold;
      font-size: inherit;
    }
  }

  h1 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

export const Button = styled(BaseButton)`
  margin-top: 1.5rem;

  width: 100%;
  color: ${vars.color.white};
`;
