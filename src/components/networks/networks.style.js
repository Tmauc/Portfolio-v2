import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const Wrapper = styled.div`
  position: fixed;
  left: 53%;
  transform: translate(-50%);
  right: 0;
  bottom: 0px;
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

  background-color: ${(p) => p.color};
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
`;

export const Span = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  color: ${(p) => p.theme.text.white};

  width: 18px;
  height: 18px;
`;
