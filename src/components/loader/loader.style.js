import styled, { css } from 'styled-components';
import { shadow, jump } from '../../assets/styles/animations';

export const LoaderWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1040;
  opacity: ${p => p.visible ? 1 : 0};
  background-color: ${p => p.theme.secondary};
  transition: opacity 0.3s ease, background-color 1s ease;
`;

export const LoaderElement = styled.div`
  width: 48px;
  height: 48px;
  margin: auto;
  position: relative;

  &:before {
    content: '';
    width: 48px;
    height: 5px;
    position: absolute;
    top: 60px;
    left: 0;
    border-radius: 50%;
    animation: ${shadow} 0.5s linear infinite;
    background-color: ${p => p.theme.tertiary};
    transition: background-color 1s ease;

  ${p => {
    if (p.isSwap) {
      return css`
          background-color: ${p => p.theme.primaryDark};
        `
    }
  }};
  }

  &:after {
  content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 4px;
    animation: ${jump} 0.5s linear infinite;
    background-color: ${p => p.theme.tertiary};
    transition: background-color 1s ease;
    ${p => {
    if (p.isSwap) {
      return css`
          background-color: ${p => p.theme.primary};
        `
    }
  }};
  }
`;