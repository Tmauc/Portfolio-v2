import styled, { keyframes, css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const glow = (color) => keyframes`
  0% {
    filter: drop-shadow(0px 0px 1px rgba(${color}));
	}
	50% {
    filter: drop-shadow(0px 0px 3px rgba(${color}));
	}
	100% {
    filter: drop-shadow(0px 0px 1px rgba(${color}));
	}
`;

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 18px;
  right: 18px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    bottom: auto;
    right: auto;
    top: 20px;
    left: 20px;
  }
`;

export const WrapperStatus = styled.div`
  grid-area: 3 / 3 / 4 / 4;
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
`;

export const Status = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 100%;

  animation-duration: 5s;
  animation-iteration-count: infinite;

  ${(p) => {
    if (p.available) {
      return css`
        background-color: rgba(0, 255, 0, 1);
        filter: drop-shadow(0px 0px 1px rgba(0, 255, 0, 1));
        animation-name: ${glow(0, 255, 0, 1)};
      `;
    } else {
      return css`
        background-color: rgba(255, 0, 0, 1);
        filter: drop-shadow(0px 0px 1px rgba(255, 0, 0, 1));
        animation-name: ${glow(255, 0, 0, 1)};
      `;
    }
  }}
`;

export const TextCircle = styled.svg`
  fill: currentColor;
  max-width: 30vmin;
  transform-origin: center;
  width: 40px;
  height: 40px;
  text-transform: uppercase;

  animation: ${spin} 30s infinite linear;
`;
