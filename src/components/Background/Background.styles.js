import styled, { css } from 'styled-components/macro';
import { media } from '../../helpers/styles/mixins';
import { vars } from '../../helpers/styles/variables';

export const Image = styled.img`
  height: 100%;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;

  filter: contrast(1.1);
  object-fit: cover;

  /* Hero */
  ${(props) =>
    props.hero &&
    css`
      height: 80vh;

      ${media('tablet')} {
        height: 100vh;
      }

      ${media('laptop-l')} {
        height: 90vh;
      }

      ${media('4k')} {
        height: 52vh;
      }
    `}
`;
