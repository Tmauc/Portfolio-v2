import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 50px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    & > *:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 5px;
    line-height: 110%;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LineWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 10px;
  & > *:not(:last-child) {
    margin-right: 5px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-bottom: 5px;
  }
`;

export const ResumesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-tap-highlight-color: transparent;
`;

export const ResumeWrapper = styled.button`
  border-bottom: 1px solid ${(p) => p.theme.bottomBorder};
  transition: all 0.3s ease-in-out;
  background-color: transparent;
  color: ${(p) => p.theme.tertiary};
  border: 0;

  ${(p) => {
    if (p.isOpen) {
      return css`
        padding-bottom: 10px;
      `;
    } else if (p.isOpenSection) {
      return css`
        opacity: 0.1;
      `;
    }
  }}

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    ${(p) => {
      if (p.isOpen) {
        return css`
          padding-bottom: 20px;
        `;
      }
    }}
  }
`;

export const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    transition: all 0.2s ease-in-out;
    width: 25px;
    height: 25px;
  }
`;

export const ResumeHeader = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 2fr 1fr 0.3fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  min-height: 80px;
  align-items: center;
  align-content: center;

  &:hover {
    ${ChevronWrapper} {
      svg {
        width: 30px;
        height: 30px;
      }
    }
  }

  & > *:not(:last-child) {
    margin-right: 10px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    grid-template-columns: 2fr 2fr 1.5fr 0.3fr;
    min-height: 60px;
    &:hover {
      ${ChevronWrapper} {
        svg {
          width: 25px;
          height: 25px;
        }
      }
    }
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

export const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DescSeparator = styled.div`
  width: 100px;
  height: 1px;
  background-color: ${(p) => p.theme.tertiary};

  margin-bottom: 10px;
`;

export const Desc = styled.p`
  font-size: 12px;
  opacity: 0;
  height: 0;
  transition: all 0.4s ease-in-out;

  ${(p) => {
    if (p.isOpen) {
      return css`
        opacity: 1;
        height: auto;
      `;
    }
  }};
`;
