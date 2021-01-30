import styled from "styled-components/macro";
import { vars } from "../../helpers/styles/variables";
import { media } from "../../helpers/styles/mixins";

const H1 = styled.h1`
  font-size: ${vars.fontSize.medium};
  margin-bottom: 0.5rem;

  ${media("small")} {
    font-size: ${vars.fontSize.big};
  }
`;

export default H1;
