import styled from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Image = styled.img`
  height: ${(props) => (props.hero ? 'calc(80vh + 4.5rem)' : '100%')};
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  filter: contrast(1.1);
  object-fit: cover;

  ${media('laptop-s')} {
    /* height: ${(props) => props.hero && '100vh'}; */
  }

  ${media('laptop-l')} {
    height: ${(props) => props.hero && 'calc(70vh + 4.5rem)'};
  }

  ${media('4k')} {
    height: ${(props) => props.hero && 'calc(50vh + 4.5rem)'};
  }
`;
