import styled from "styled-components/macro";
import { vars } from "../../helpers/styles/variables";
import { media } from "../../helpers/styles/mixins";

const H2 = styled.h2`
  font-weight: normal;
  margin-bottom: 1rem;

  ${media("small")} {
    font-size: ${vars.fontSize.medium};
  }
`;

export default H2;
