import styled, { css } from 'styled-components';
import { LargeText } from 'assets/styles/common.style';

export const Label = styled.label``;

export const SpanMenu = styled.span`
  position: fixed;
  left: -20px;
  bottom: -20px;
  z-index: 100;
  width: 80px;
  height: 80px;
  background-color: ${(p) => p.theme.secondary};
  //background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23FF8800FF' stroke-width='1' stroke-dasharray='21%2c 23%2c 11' stroke-dashoffset='10' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 100px;
  border-radius: 50% 50% 50% 50%;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  box-shadow: 0 0 0 0 ${(p) => p.theme.secondary},
    0 0 0 0 ${(p) => p.theme.secondary};
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;
`;
export const SpanHamburgerMenu = styled.span`
  position: absolute;
  top: 32px;
  left: 35px;
  width: 20px;
  height: 1.5px;
  display: block;
  -webkit-transform-origin: center;
  transform-origin: center;
  -webkit-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;

  background-color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.tertiary};
  &::after,
  &::before {
    background-color: ${(p) => p.theme.primary};
    background-color: ${(p) => p.theme.tertiary};
  }

  &::after,
  &::before {
    -webkit-transition: 0.5s ease-in-out;
    transition: 0.5s ease-in-out;
    content: '';
    position: absolute;
    display: block;
    width: 100%;
    height: 80%;
  }

  &:before {
    top: -8px;
  }

  &:after {
    bottom: -8px;
  }
`;

export const Wrapper = styled.div`
  z-index: 200;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 60vh;
  right: 0;
  visibility: hidden;
  overflow: hidden;
`;

export const NetworksWrapper = styled.div`
    -webkit-transition: 0s 0.2s ease-in-out;
  transition: 0s 0.2s ease-in-out;

`;

export const Ul = styled.ul`
  padding: 0;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column-reverse;
  justify-content: flex-end;

  padding: 0px 10%;
  margin: 10px;
`;

export const Li = styled.li`
  list-style-type: none;
`;

export const A = styled(LargeText).attrs({
  as: 'a',
})`
  margin-bottom: 1em;
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 8vw;
  -webkit-text-stroke-width: 1px;
  -webkit-tap-highlight-color: transparent;
  -webkit-text-stroke-color: ${(p) => p.theme.primary};
  &:hover {
    color: ${(p) => p.theme.primary};
  }

  ${(p) => {
    if (p.disabled) {
      return css`
        -webkit-text-stroke-color: ${p.theme.primary};
        opacity: 0.2;
        cursor: not-allowed;
        pointer-events: none;
      `;
    }
    if (p.active) {
      return css`
        -webkit-text-stroke-color: ${p.theme.primary};
        color: ${p.theme.primary};
      `;
    }
  }};
`;

export const Input = styled.input`
  display: none;
  &:checked + ${SpanMenu} {
    box-shadow: 0 0 0 100vw ${(p) => p.theme.secondary},
      0 0 0 100vh ${(p) => p.theme.secondary};
    box-shadow: 0 0 0 100vw ${(p) => p.theme.secondary},
      0 0 0 100dvh ${(p) => p.theme.secondary};
    border-radius: 0;
  }

  &:checked + ${SpanMenu} ${SpanHamburgerMenu} {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }

  &:checked + ${SpanMenu} ${SpanHamburgerMenu}:after {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    bottom: 0;
  }

  &:checked + ${SpanMenu} ${SpanHamburgerMenu}:before {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    top: 0;
  }

  &:checked + ${SpanMenu} + ${Wrapper} {
    visibility: visible;
  }

  &:checked + ${SpanMenu} + ${Wrapper} ${A} {
    -webkit-transition: 0s 0.3s ease-in-out;
    transition: 0s 0.3s ease-in-out;
  }
`;
