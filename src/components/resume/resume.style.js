import styled, { css } from 'styled-components';
import { TABLET_WIDTH, LAPTOP_HEIGHT } from 'constants/constants';
import { Neumorphism } from 'assets/styles/common.style';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 98%;

  & > *:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const Wrapper = styled(Neumorphism)`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 5px;
    line-height: 110%;
  }
`;

export const ResumesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  max-height: 200px;
  padding-right: 10px;

  @media only screen and (max-height: ${LAPTOP_HEIGHT}px) {
    max-height: 100px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    max-height: 200px;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${p => p.theme.contrastBorder};
    border-radius: 4px;
    width: 3px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: ${p => p.theme.primary};
  }
`;

export const ResumeWrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.bottomBorder};
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  ${p => {
    if (p.isOpen) {
      return css`
        padding-top: 10px;
        padding-bottom: 10px;
      `
    }
  }}

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    ${p => {
    if (p.isOpen) {
      return css`
          padding-bottom: 20px;
        `
    }
  }}
  }
`;

export const ResumeHeader = styled.div`
  display: grid;
  grid-template-columns: .1fr 1.2fr 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  min-height: 80px;
  align-items: center;
  align-content: center;

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px), 
       only screen and (max-height: ${LAPTOP_HEIGHT}px) {
    min-height: 40px;
  }
`;

export const Title = styled.h3`
  display: flex;
  flex-direction: column;
`;

export const P = styled.p`
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 10px;
  }
`;

export const BigText = styled.p`
  font-size: 32px;
  white-space: nowrap;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 16px;
    white-space: normal;
  }
`;

export const Desc = styled.p`
  font-size: 12px;
  opacity: 0;
  height: 0;
  transition: all 0.1s ease-in-out;

  ${p => {
    if (p.isOpen) {
      return css`
        opacity: 1;
        height: auto;
      `
    }
  }};
`;