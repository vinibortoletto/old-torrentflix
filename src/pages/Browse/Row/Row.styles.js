import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 0 1rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const List = styled.ul`
  display: flex;
  gap: 0.2rem;

  img {
    width: 15rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.3rem;
  }
`;
