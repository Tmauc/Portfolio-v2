import styled from 'styled-components';

import { LargeText } from 'assets/styles/common.style';

export const ToggleWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: -81px;
  overflow: hidden;
  color: white;
  transform: scale(0.6);
  z-index: 1041;
`;

export const LangButton = styled(LargeText).attrs({
  as: 'button',
})`
  font-size: 8vw;
  line-height: 100%;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${(p) => p.theme.primary};
  background-color: transparent;
  border: 0;
  padding: 0;
  -webkit-transition: 0s 0.3s ease-in-out;
  transition: 0s 0.3s ease-in-out;
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