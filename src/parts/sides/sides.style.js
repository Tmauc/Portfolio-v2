import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const AboutWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 10px;
  }
`;


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

export const Section = styled.section`
  border-radius: 0px;
  background: ${(p) => p.theme.secondaryBackground};
  padding: 20px;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  width: 100%;

  ${p => {
    if (p.scrollIndicator) {
      return css`
        margin-bottom: 10px !important;
      `
    }
  }};
`;

export const ContactWrapper = styled.div`
  display: flex;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    justify-content: center;
    align-items: center;
  }

  justify-content: end;
  padding: 10px 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
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
  margin-bottom: 30px !important;

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

export const Legend = styled.p`
  font-size: 12px;
  font-style: italic;
  text-align: end;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 10px;
  }
`;

export const JumpLine = styled.p`
  height: 24px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 15px;
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