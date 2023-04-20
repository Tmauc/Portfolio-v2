import styled from 'styled-components';
import { tiktokColor, githubColor, textWhite, secondary, twitchColor, instagramColor, linkedinColor, youtubeColor, twitterColor, blackTransparent01 } from 'assets/styles/colors';

export const Wrapper = styled.div`
  position: fixed;
  left: 50%;
  transform: translate(-50%);
  right: 0;
  bottom: 10px;
  z-index: 1030;
  width: fit-content;

  display: inline-flex;
  justify-content: center;

  color: ${secondary};
`;

export const IconWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${textWhite};
  border-radius: 50%;
  box-shadow: 0 10px 10px ${blackTransparent01};

  width: 30px;
  height: 30px;
  padding: 15px;
  margin: 10px;

  font-size: 18px;

  cursor: pointer;
  transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  
  &:hover > div {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }
  
  &:hover > span,
  &:hover > div {
    text-shadow: 0px -1px 0px ${blackTransparent01};
  }

  &:hover.twitter,
  &:hover.twitter > div,
  &:hover.twitter > div::before {
    background-color: ${twitterColor};
    color: ${textWhite};
  }

  &:hover.instagram,
  &:hover.instagram > div,
  &:hover.instagram > div::before {
    background-color: ${instagramColor};
    color: ${textWhite};
  }

  &:hover.tiktok,
  &:hover.tiktok > div,
  &:hover.tiktok > div::before {
    background-color: ${tiktokColor};
    color: ${textWhite};
  }

  &:hover.linkedin,
  &:hover.linkedin > div,
  &:hover.linkedin > div::before {
    background-color: ${linkedinColor};
    color: ${textWhite};
  }

  &:hover.github,
  &:hover.github > div,
  &:hover.github > div::before {
    background-color: ${githubColor};
    color: ${textWhite};
  }

  &:hover.youtube,
  &:hover.youtube > div,
  &:hover.youtube > div::before {
    background-color: ${youtubeColor};
    color: ${textWhite};
  }

  &:hover.twitch,
  &:hover.twitch > div,
  &:hover.twitch > div::before {
    background-color: ${twitchColor};
    color: ${textWhite};
  }
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  width: 100%;
`

export const Tooltip = styled.div`
  position: absolute;
  top: 0;

  background-color: ${textWhite};
  border-radius: 5px;
  color: ${textWhite};
  box-shadow: 0 10px 10px ${blackTransparent01};
  opacity: 0;

  padding: 5px 8px;

  font-size: 14px;

  pointer-events: none;
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);

  &::before {
    content: "";

    position: absolute;
    bottom: -3px;
    left: 50%;

    height: 8px;
    width: 8px;

    color: ${textWhite};
    background-color: ${textWhite};

    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
`;
