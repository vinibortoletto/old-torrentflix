import styled from 'styled-components/macro';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';
import { Button as BaseButton } from '../../components/Button/Button.styles';

export const Main = styled.main`
  padding: 7rem 5vw;
  color: ${vars.color.black};

  .content-wrapper {
    margin: auto;
    max-width: 21rem;
  }

  .input-wrapper {
    margin-bottom: 0.5rem;

    input {
      border: 1px solid ${vars.color.lightGrey};
    }
  }

  /* Password error  */
  input.error {
    border: 1px solid ${vars.color.red};
  }

  .password-error p {
    color: ${vars.color.red};
    font-size: ${vars.fontSize.small};
    text-align: right;
  }
`;

export const Button = styled(BaseButton)`
  margin-top: 1.5rem;

  width: 100%;
  color: ${vars.color.white};
`;

export const Devices = styled.img`
  width: 16.25rem;
  margin-bottom: 2rem;
`;

export const Text = styled.div`
  h1 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }

  h2 {
    font-weight: normal;
    margin-bottom: 1rem;
  }
`;
