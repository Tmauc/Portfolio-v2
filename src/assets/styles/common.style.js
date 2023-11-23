import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const LargeText = styled.h1`
  display: inline;
  width: fit-content;

  font-family: 'TT Firs Neue Trl Black';
  font-size: 5vw;
  //font-size: calc(5000vw / 1080);
  line-height: 75%;
  text-transform: uppercase;

  z-index: 200;

  transition: all 0.2s ease-out;

  color: ${(p) => p.theme.secondary};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${(p) => p.theme.contrastBorder};

  &::after {
    background: ${(p) => p.theme.bottomBorder};
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    font-size: 10vw;
  }
`;
