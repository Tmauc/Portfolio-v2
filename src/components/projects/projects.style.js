import styled, { css } from 'styled-components';

import {
  ITSME_ARROW,
} from 'constants/constants';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: red;

  ${p => {
    if (p.type === ITSME_ARROW) {
      return css`
          top: 135px;
          right: 70px;  
        `
    }
  }}
`;
