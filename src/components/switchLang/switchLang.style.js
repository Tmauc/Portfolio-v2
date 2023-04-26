import styled from 'styled-components';

import { TABLET_WIDTH } from '../../constants/constants';

export const ToggleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: -81px;
  overflow: hidden;
  color: white;
  transform: scale(0.6);
  z-index: 1041;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    right: -75px;
  }
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: ${(p) => p.theme.tertiary};
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const ToggleHandler = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 200;
  top: 3px;
  left: 3px;
  width: 44px;
  height: 44px;
  background-color: ${(p) => p.theme.secondary};
  border-radius: 50px;
  box-shadow: 0 2px 6px ${(p) => p.theme.transparent.black03};
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  font-size: 19px;
  color: ${(p) => p.theme.tertiary};
`;

export const Input = styled.input`
  position: absolute;
  left: -99em;

  &:checked + ${Label} {
    background-color: ${(p) => p.theme.tertiary};
  }

  &:checked + ${Label} ${ToggleHandler} {
    background-color: ${(p) => p.theme.secondary};
    transform: translate3d(40px, 0, 0) rotate(0);
  }
`;