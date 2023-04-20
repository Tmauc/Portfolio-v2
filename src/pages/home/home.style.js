import styled, { css } from 'styled-components';
import { orange, purple, darkPink, pink, darkYellow, yellow, blackTransparent02 } from 'assets/styles/colors';
import { glitchAnim, jiggle } from 'assets/styles/animations'
import * as constants from 'constants/constants';

import leftPNG from 'assets/imgs/thomas.png'
import rightPNG from 'assets/imgs/mauc.png'

export const Background = styled.div`
  background-color: ${p => p.theme.secondary};
    ${p => {
    if (p.activeSide === constants.LEFT_SIDE) {
      return css`
        background-image: url(${leftPNG}),
        url('https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg');
      `
    } else if (p.activeSide === constants.RIGHT_SIDE) {
      return css`
        background-image: url(${rightPNG}),
        url('https://kawsar.design/wp-content/uploads/2023/02/BG-Tx-1.svg');
      `
    }
  }};
  background-size: contain, cover;
  background-attachment: fixed;
  background-position: right, center center;
  background-repeat: no-repeat;
`;

export const Main = styled.div`
  display: flex;
  background-color: ${blackTransparent02};
  overflow-x: hidden;
  height: 100vh;
`;

export const PageWrapper = styled.div`
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 50px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23FF8800FF' stroke-width='1' stroke-dasharray='21%2c 23%2c 11' stroke-dashoffset='37' stroke-linecap='square'/%3e%3c/svg%3e");
`;

export const Header = styled.section`
  display: flex;
  flex-direction: column;
`;

export const GradientWrapper = styled.div`
  display: flex;
`;

export const LargeText = styled.h2`
  display: inline;
  width: fit-content;

  font-size: calc(5000vw / 1080);
  font-weight: 900;
  line-height: 75%;
  text-transform: uppercase;

  transition: all 0.2s ease-out;

  padding-top: 20px;

  color: ${p => p.theme.secondary};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${p => p.theme.contrastBorder};

  &::after {
    content: ' ';
    display: block;
    height: 2px;
    width: 100%;
    z-index: 0;
    background: ${p => p.theme.bottomBorder};
  }

  ${p => {
    if (p.activeSide === constants.LEFT_SIDE) {
      return css`
        &,
        * {
          &::selection {
            background: ${orange};
            color: ${p => p.theme.secondary};
            -webkit-text-stroke-width: 0;
          }
        }
      `
    } else if (p.activeSide === constants.RIGHT_SIDE) {
      return css`
        &,
        * {
          &::selection {
            background: ${purple};
            color: ${p => p.theme.secondary};
            -webkit-text-stroke-width: 0;
          }
        }
      `
    }
  }}
`;

export const LargeLink = styled.button`
  display: inline;
  width: fit-content;

  padding: 0;
  border: 0;

  font-size: calc(5000vw / 1080);
  font-weight: 900;
  line-height: 75%;
  text-transform: uppercase;

  transition: all 0.2s ease-out;

  padding-top: 20px;

  cursor: pointer;

  color: ${p => p.theme.secondary};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${p => p.theme.contrastBorder};
  &::after {
    background: ${p => p.theme.bottomBorder};
  }

  &:hover {
    transition: all 0.2s ease-out;
  }
`;

export const Gradient = styled(LargeLink)`
  background-size: 100%;
  background-repeat: repeat;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-stroke-width: 0;
  position: relative;
  z-index: 200;
  margin-right: 20px;

  &,
  * {
    &::selection {
      background: ${p => p.theme.secondary};
      color: ${p => p.theme.tertiary};
      -webkit-text-fill-color: ${p => p.theme.tertiary};
      -moz-text-fill-color: ${p => p.theme.tertiary};
    }
  }

  -webkit-animation: ${jiggle} 7s infinite;
  -moz-animation: ${jiggle} 7s infinite;
  -o-animation: ${jiggle} 7s infinite;
  animation: ${jiggle} 7s infinite;

  &::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    display: flex;
    justify-content: center;
    clip-path: var(--move1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
  }

  &:hover::after {
    animation: ${glitchAnim} 1s;
    animation-timing-function: steps(2, end);
    background-color: transparent;
  }
`

export const ColorGradient = styled(Gradient)`
  ${p => {
    if (p.activeSide === constants.LEFT_SIDE) {
      return css`
        color: ${orange};
        background-color: ${orange};
        background-image: linear-gradient(
          30deg,
          ${orange} 40%,
          ${darkYellow} 80%,
          ${yellow} 100%
        );

        &::after {
          content: 'MAUC';
        }

        &:hover::after {
          text-shadow: -3px -3px 0px ${purple}, 3px 3px 0px ${darkPink};
          border: 3px solid ${purple};
        }
      `
    } else if (p.activeSide === constants.RIGHT_SIDE) {
      return css`
        color: ${purple};
        background-color: ${purple};
        background-image: linear-gradient(
          30deg,
          ${purple} 40%,
          ${darkPink} 80%,
          ${pink} 100%
        );

        &::after {
          content: 'THOMAS';
        }

        &:hover::after {
          text-shadow: -3px -3px 0px ${orange}, 3px 3px 0px ${darkYellow};
          border: 3px solid ${orange};
        }
      `
    }
  }}
`

export const MainSection = styled.section`
  margin-left: 10%;
  margin-top: 6%;
  max-width: 50vw;
`;