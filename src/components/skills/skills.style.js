import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    & > *:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const SkillWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  margin-right: 15px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-right: 10px;
  }
`;

export const Title = styled.h3`
  color: ${p => p.theme.tertiary};
  white-space: nowrap;
`;

export const Span = styled.span`
  height: 30px;
  width: 30px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  background-color: ${p => p.color};
  color: ${p => p.theme.text.white};

  svg {
    color: currentColor;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 20px;
    width: 20px;
  }
`;

export const P = styled.p`
  margin-left: 10px;
  color: ${p => p.theme.tertiary};
  white-space: nowrap;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-left: 5px;
  }

`;