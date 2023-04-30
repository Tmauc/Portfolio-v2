import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  right: 0;
  bottom: 10px;
  z-index: 1030;
  width: fit-content;

  display: inline-flex;
  justify-content: center;

  color: ${(p) => p.theme.secondary};

`;

export const IconWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(p) => p.theme.tertiary};
  border-radius: 50%;
  box-shadow: 0 10px 10px ${(p) => p.theme.transparent.black01};

  width: 30px;
  height: 30px;
  padding: 15px;
  margin: 10px;

  font-size: 18px;

  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin: 10px 4px;
  }

  &:hover > div {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  &:hover > span,
  &:hover > div {
    text-shadow: 0px -1px 0px ${(p) => p.theme.transparent.black01};
  }

  &:hover.twitter,
  &:hover.twitter > div,
  &:hover.twitter > div::before {
    background-color: ${(p) => p.theme.socialMedia.twitter};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.instagram,
  &:hover.instagram > div,
  &:hover.instagram > div::before {
    background-color: ${(p) => p.theme.socialMedia.instagram};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.tiktok,
  &:hover.tiktok > div,
  &:hover.tiktok > div::before {
    background-color: ${(p) => p.theme.socialMedia.tiktok};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.linkedin,
  &:hover.linkedin > div,
  &:hover.linkedin > div::before {
    background-color: ${(p) => p.theme.socialMedia.linkedin};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.github,
  &:hover.github > div,
  &:hover.github > div::before {
    background-color: ${(p) => p.theme.socialMedia.github};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.youtube,
  &:hover.youtube > div,
  &:hover.youtube > div::before {
    background-color: ${(p) => p.theme.socialMedia.youtube};
    color: ${(p) => p.theme.text.white};
  }

  &:hover.twitch,
  &:hover.twitch > div,
  &:hover.twitch > div::before {
    background-color: ${(p) => p.theme.socialMedia.twitch};
    color: ${(p) => p.theme.text.white};
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 18px;
  height: 18px;
`;

export const Tooltip = styled.div`
  position: absolute;
  top: 0;

  background-color: ${(p) => p.theme.text.white};
  border-radius: 5px;
  color: ${(p) => p.theme.text.white};
  box-shadow: 0 10px 10px ${(p) => p.theme.transparent.black01};
  opacity: 0;

  padding: 5px 8px;

  font-size: 14px;

  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    content: '';

    position: absolute;
    bottom: -3px;
    left: 50%;

    height: 8px;
    width: 8px;

    color: ${(p) => p.theme.text.white};
    background-color: ${(p) => p.theme.text.white};

    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;
