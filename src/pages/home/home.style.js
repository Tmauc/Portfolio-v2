import styled from 'styled-components';
import { glitchAnim, jiggle } from 'assets/styles/animations';
import { LargeText } from 'assets/styles/common.style';
import { TABLET_WIDTH } from 'constants/constants';

export const Background = styled.div`
  background-color: ${(p) => p.theme.secondary};
  background-image: url(${(p) => p.theme.backgroundMultipleCircle});

  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    background-position: center center;
  }

  &,
  * {
    &::selection {
      background: ${(p) => p.theme.primary};
      color: ${(p) => p.theme.secondary};
      -webkit-text-stroke-width: 0;
    }
  }
`;

export const Img = styled.img`
  position: fixed;
  top: 0;
  right: 0;
  width: auto;
  min-height: 100vh;
  min-height: 100dvh;
  height: 1000px;
  overflow: hidden;
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 1));
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    object-fit: contain;
    object-position: bottom;
    width: 100vw;
    height: auto;
  }
`;

export const Main = styled.div`
  position: relative;
  display: flex;
  overflow: hidden;
  height: 100vh;
  height: 100dvh;
  background-color: ${(p) => p.theme.transparentBackground02};

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    background-color: ${(p) => p.theme.transparentBackground06};
  }
`;

export const PageWrapper = styled.div`
  width: calc(100vw - 20px);
  display: flex;
  flex-direction: column;
  margin: 10px 10px 10px 50px;
  padding: 50px;
  //padding-bottom: 100px;
  background-image: url('${(p) => p.theme.backgroundUrl}');

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 50px 8%;
    padding-right: 0;
    margin-left: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
`;

export const GradientWrapper = styled.div`
  display: flex;
`;

export const LargeTransparentText = styled(LargeText)`
  padding-top: 20px;

  &::after {
    content: ' ';
    display: block;
    height: 2px;
    width: 100%;
    z-index: 0;
  }

  &,
  * {
    &::selection {
      background: ${(p) => p.theme.primary};
      color: ${(p) => p.theme.secondary};
      -webkit-text-stroke-width: 0;
    }
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    -webkit-text-stroke-width: 1px;
    padding-top: 10px;
  }
`;

export const LargeLink = styled(LargeText).attrs({
  as: 'button',
})`
  padding: 0;
  border: 0;
  padding-top: 20px;

  transition: all 0.2s ease-out;

  -webkit-tap-highlight-color: transparent;

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
      background: ${(p) => p.theme.secondary};
      color: ${(p) => p.theme.tertiary};
      -webkit-text-fill-color: ${(p) => p.theme.tertiary};
      -moz-text-fill-color: ${(p) => p.theme.tertiary};
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

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-right: 10px;
  }
`;

export const ColorGradient = styled(Gradient)`
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.primary};
  background-image: linear-gradient(
    30deg,
    ${(p) => p.theme.primary} 40%,
    ${(p) => p.theme.primaryDark} 80%,
    ${(p) => p.theme.primaryLight} 100% 100%
  );

  &::after {
    content: '${(p) => p.theme.content}';
  }

  &:hover::after {
    text-shadow: -3px -3px 0px ${(p) => p.theme.invertPrimary},
      3px 3px 0px ${(p) => p.theme.invertPrimaryDark};
    border: 3px solid ${(p) => p.theme.invertPrimary};
  }
`;

export const MainSection = styled.div`
  overflow-y: auto;
  overflow-x: hidden;

  max-width: 100vw;
  height: 100%;

  margin-top: 20px;

  &::-webkit-scrollbar {
    width: 30px;
  }
  &::-webkit-scrollbar * {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 0, 0, 0) !important;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: flex;
    justify-content: center;
    margin-left: 0;
    margin-top: 30px;
    max-width: 100vw;
    font-size: 12px;
  }

  @media only screen and (orientation: portrait) {
    margin-top: 100px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 55vw;

  & > *:not(:last-child) {
    margin-bottom: 150px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    max-width: 100vw;
  }
`;
