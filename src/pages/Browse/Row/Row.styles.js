import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.div`
  padding: 0 1rem;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-weight: bold;
  text-transform: capitalize;
  margin-bottom: 0.5rem;
`;

export const Icon = styled.img`
  width: 1.5rem;
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  z-index: 2;
`;

export const CardTitle = styled.span`
  width: 90%;

  position: absolute;
  bottom: 10%;
  left: 50%;
  z-index: 2;
  transform: translateX(-50%);

  text-align: center;
  font-size: ${vars.fontSize.small};
  text-transform: uppercase;
  font-weight: bold;
  transition: 0.2s ease;
`;

export const CardImg = styled.img`
  width: 15rem;
  height: 8rem;
  object-fit: cover;
  border-radius: 0.3rem;
  transition: 0.2s ease;
`;

export const CardOverlay = styled.div`
  width: 15rem;
  height: 8rem;

  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;

  background: linear-gradient(to top, rgba(0, 0, 0, 0.7) 10%, transparent);
`;

export const List = styled.ul`
  display: flex;
  gap: 0.3rem;
  /* overflow: hidden; */

  li {
    position: relative;
    cursor: pointer;
  }
`;
