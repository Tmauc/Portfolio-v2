
import { keyframes } from 'styled-components';

export const btnAnim = keyframes`
  0% {
    left: -100%;
  }
  50%, 100% {
    left: 100%;
  }
`;

export const jiggle = keyframes`
  0%, 5.2%, 100% {
    margin-left: 0px;
  }
  0.4% {
    margin-left: -3px;
  }
  1.2% {
    margin-left: 3px;
  }
  2% {
    margin-left: -3px;
  }
  2.8% {
    margin-left: 3px;
  }
  3.6% {
    margin-left: -3px;
  }
  4.4% {
    margin-left: 3px;
  }
`;

export const bounceLeft = keyframes`
  0%, 5.2%, 100% {
    margin-left: 0px;
  }
  25% {
    margin-left: -10px;
  }
  50% {
    margin-left: 0px;
  }
  75% {
    margin-left: 10px;
  }
`;

export const glitchAnim = keyframes`
  0% {
    clip-path: var(--move1);
    transform: translate(0px, -10px);
  }
  10% {
    clip-path: var(--move2);
    transform: translate(-20px, 10px);
  }
  20% {
    clip-path: var(--move3);
    transform: translate(20px, 0px);
  }
  30% {
    clip-path: var(--move4);
    transform: translate(-20px, 10px);
  }
  40% {
    clip-path: var(--move5);
    transform: translate(20px, -10px);
  }
  50% {
    clip-path: var(--move6);
    transform: translate(-10px, 10px);
  }
  60% {
    clip-path: var(--move1);
    transform: translate(10px, -10px);
  }
  70% {
    clip-path: var(--move3);
    transform: translate(-30px, 10px);
  }
  80% {
    clip-path: var(--move2);
    transform: translate(20px, -10px);
  }
  90% {
    clip-path: var(--move4);
    transform: translate(-10px, 10px);
  }
  100% {
    clip-path: var(--move1);
    transform: translate(0);
  }
`;