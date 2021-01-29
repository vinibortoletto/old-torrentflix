import styled from 'styled-components';
import { vars } from '../../helpers/styles/variables';

export const Input = styled.input`
  height: 3rem;
  width: 100%;

  padding: 0.6rem;
  background-color: ${(props) =>
    props.form ? `${vars.color.darkGrey}` : `${vars.color.white}`};
  color: ${vars.color.black};

  border-radius: ${vars.borderRadius.small};
  font-size: ${vars.fontSize.small};
`;
