import styled from 'styled-components/macro';
import { media } from '../../../helpers/styles/mixins';
import { vars } from '../../../helpers/styles/variables';

export const Container = styled.section`
  height: calc(80vh - 58.23px);
  max-width: 100%;
  padding: 0 ${vars.sidePadding.small};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .subscribe-wrapper {
    margin-top: -1rem;
  }

  ${media('tablet')} {
    height: calc(100vh - 65.8px);

    h1 {
      font-size: ${vars.fontSize.large};
    }
    h2 {
      font-size: ${vars.fontSize.medium};
    }

    .text-wrapper {
      width: 37rem;
      margin: auto;
    }

    .subscribe-wrapper {
      width: 45rem;
    }
  }

  ${media('laptop-s')} {
    height: calc(100vh - 73.36px);
  }

  ${media('laptop-l')} {
    height: calc(90vh - 96.03px);
  }

  ${media('4k')} {
    height: calc(52vh - 96.03px);
  }
`;
