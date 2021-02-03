import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';
import { media } from '../../helpers/styles/mixins';

export const Container = styled.div`
  width: 100%;
  position: relative;

  input {
    height: 100%;
    width: 100%;
    padding: 1.2rem 1rem 0.6rem 1rem;
    border-radius: ${vars.borderRadius.small};
    color: ${(props) =>
      props.dark ? `${vars.color.white}` : `${vars.color.black}`};
    background-color: ${(props) =>
      props.dark ? `${vars.color.grey}` : `${vars.color.white}`};
    font-size: 1rem;
  }

  label {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);

    padding-left: 1rem;
    color: ${(props) =>
      props.dark ? `${vars.color.lightGrey}` : `${vars.color.grey}`};

    pointer-events: none;
    transition: 0.2s ease;

    font-size: ${vars.fontSize.small};

    &.active {
      padding-top: 0.2rem;
      font-size: ${vars.fontSize.small};
      top: 0;
      transform: translateY(0);
    }
  }

  ${media('tablet')} {
    label {
      font-size: 1rem;
    }
  }
`;
