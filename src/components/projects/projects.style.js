import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const MainWrapper = styled.div`
  margin-top: 40px;

  & > *:not(:last-child) {
    margin-bottom: 80px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-top: 20px;

    & > *:not(:last-child) {
      margin-bottom: 40px;
    }
  }
`;

export const ContentWrapper = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: auto;
  }
`;

export const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr 1fr;
  grid-template-rows: 1fr;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.5fr 2fr 0.5fr;

    & > *:not(:last-child) {
      margin-bottom: 20px;
      margin-right: 0px;
    }
  }
`;
export const IMGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: hidden;
  min-width: 100px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    flex-direction: row;
    //max-width: 70vw;
    min-height: 70px;

    & > *:not(:last-child) {
      margin-right: 20px;
      margin-bottom: 0px;
    }
  }
`;

export const ProjectIMG = styled.img`
  min-width: 100px;
  aspect-ratio: 16/9;
  object-fit: cover;

  transition: all 0.4s;

  ${(p) => {
    if (p.isSelected) {
      return css`
        opacity: 0.2;
        cursor: unset;
      `;
    }
  }}

  &:hover {
    filter: grayscale(50%);
  }
`;

export const StyledA = styled.a`
  height: fit-content;
`

export const MiddleWrapper = styled.div``;

export const SelectedIMG = styled.img`
  min-width: 25vw;
  max-width: 25vw;
  object-fit: cover;

  @media only screen and (max-width: ${TABLET_WIDTH}px),
    only screen and (orientation: portrait) {
    width: 70vw;
    max-width: fit-content;
    aspect-ratio: 16/9;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  margin-top: 10px;

  & > *:not(:last-child) {
    margin-right: 20px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    & > *:not(:last-child) {
      margin-right: 20px;
    }
  }
`;

export const Skill = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  padding: 10px;
  border-radius: 10px;
  border: 2px solid ${(p) => p.theme.tertiary};
  text-transform: capitalize;
  font-weight: 1000;

  color: ${(p) => p.theme.tertiary};
  background-color: ${(p) => p.theme.secondary};

  &:hover {
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.secondary};
    border-color: ${(p) => p.theme.primary};
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 8px;
  }
`;

export const Description = styled.div`
`;
