import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

const sketchStyle = css`
  content: '';
  position: absolute;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 2rem;
  border-width: 2px;
  border-style: solid;
  border-radius: 0.25rem;
  border-color: ${(p) => p.theme.primary};
  transform: rotate(2deg);
`;

export const Neumorphism = styled.div`
  border-radius: 0px;
  background: ${(p) => p.theme.secondaryBackground};
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
  width: fit-content;
`;

export const LargeText = styled.h1`
  width: fit-content;

  font-family: "TT Firs Neue Trl Black";
  font-size: calc(5000vw / 1080);
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

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 10vw;
  }
`;

export const H2 = styled.h2`
  font-size: 32px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 24px;
  }
`;

export const Italic = styled.p`
  font-style: italic;
  font-size: 12px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 10px;
  }
`;

export const P = styled.p`
  font-size: 24px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 15px;
  }
`;

export const Highlight = styled.span`
  position: relative;
  white-space: nowrap;
  padding: 0 5px;
`;

export const HighlightRect = styled(Highlight)`
  &:before,
  &:after {
    ${sketchStyle};

    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      height: 1.3rem;
    }
  }

  &:before {
    border-right-color: transparent;
  }

  &:after {
    border-left-color: transparent;
    border-top-color: transparent;
    transform: rotate(-1deg);
  }
`;

export const HighlightLine = styled(Highlight)`
  position: relative;

  &:before {
    ${sketchStyle};
    transform: rotate(-1deg);
    border-left-color: transparent;
    border-right-color: transparent;
    border-top-color: transparent;

    @media only screen and (max-width: ${TABLET_WIDTH}px) {
      height: 1.3rem;
    }
  }
`;
