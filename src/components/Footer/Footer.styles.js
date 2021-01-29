import styled from "styled-components/macro";
import { vars } from "../../helpers/styles/variables";

export const Container = styled.footer`
  color: ${vars.color.grey};
  padding: 4rem ${vars.padding.small} 2rem ${vars.padding.small};
`;

export const Title = styled.h1`
  margin-bottom: 1.5rem;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;

  li {
    margin-bottom: 0.7rem;
  }
  a {
    font-size: ${vars.fontSize.small};
  }
`;

export const Select = styled.div`
  margin-top: 2rem;

  select {
    background-color: ${vars.color.black};
    padding: 1rem 2rem;
    border: 1px solid ${vars.color.grey};
    border-radius: ${vars.borderRadius.small};
  }
`;

export const Copyright = styled.div`
  font-size: ${vars.fontSize.small};
  text-align: center;
  margin-top: 2rem;

  .strong {
    color: ${vars.color.red};
    font-weight: bold;
  }
`;
