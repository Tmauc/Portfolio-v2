import styled, { css } from 'styled-components';
import { glitchAnim, jiggle } from 'assets/styles/animations';
import { LargeText } from 'assets/styles/common.style';
import { TABLET_WIDTH } from 'constants/constants';

export const Nav = styled.nav`
  display: flex;

  justify-content: space-between;
  align-items: center;
  text-decoration: none;

  ${p => {
    if (!p.isShort) {
      return css`
        width: 100dvw;
        padding: 1% 50px;
        background-color: ${(p) => p.theme.secondaryBackground};
      `
    }
  }}
`;

export const GradientWrapper = styled.div`
  display: flex;
`;

export const LargeLink = styled(LargeText).attrs({
  as: 'button',
})`
  padding: 0;
  border: 0;
  padding-top: 10px;

  transition: all 0.2s ease-out;

  -webkit-tap-highlight-color: transparent;

  &:hover {
    transition: all 0.2s ease-out;
  }
`;

export const Gradient = styled(LargeLink)`
  font-size: 56px;
  background-size: 100%;
  background-repeat: repeat;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-stroke-width: 0;
  position: relative;
  z-index: 200;
  margin-right: 20px;

  &,
  * {
    &::selection {
      background: ${(p) => p.theme.secondary};
      color: ${(p) => p.theme.tertiary};
      -webkit-text-fill-color: ${(p) => p.theme.tertiary};
      -moz-text-fill-color: ${(p) => p.theme.tertiary};
    }
  }

  -webkit-animation: ${jiggle} 7s infinite;
  -moz-animation: ${jiggle} 7s infinite;
  -o-animation: ${jiggle} 7s infinite;
  animation: ${jiggle} 7s infinite;

  &::after {
    --move1: inset(50% 50% 50% 50%);
    --move2: inset(31% 0 40% 0);
    --move3: inset(39% 0 15% 0);
    --move4: inset(45% 0 40% 0);
    --move5: inset(45% 0 6% 0);
    --move6: inset(14% 0 61% 0);
    display: flex;
    justify-content: center;
    clip-path: var(--move1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
  }

  &:hover::after {
    animation: ${glitchAnim} 1s;
    animation-timing-function: steps(2, end);
    background-color: transparent;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-right: 10px;
  }
`;

export const ColorGradient = styled(Gradient)`
  color: ${(p) => p.theme.primary};
  background-color: ${(p) => p.theme.primary};
  background-image: linear-gradient(
    30deg,
    ${(p) => p.theme.primary} 40%,
    ${(p) => p.theme.primaryDark} 80%,
    ${(p) => p.theme.primaryLight} 100% 100%
  );

  &::after {
    content: '${(p) => p.theme.content}';
  }

  &:hover::after {
    text-shadow: -3px -3px 0px ${(p) => p.theme.invertPrimary},
      3px 3px 0px ${(p) => p.theme.invertPrimaryDark};
    border: 3px solid ${(p) => p.theme.invertPrimary};
  }
`;

export const Ul = styled.ul`
  display: flex;

  width: fit-content;
  height: 100%;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0px;
  gap: 40px;
  
  list-style: none;
`;

export const Span = styled.span`
  height: auto;
  width: auto;
  white-space: nowrap;
`;

export const NavItem = styled.li`
  
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;

  color: ${(p) => p.theme.tertiary};
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  border-bottom: 0.5px solid transparent;

  &:hover {
    border-color: ${(p) => p.theme.primary};
  }

  &:active {
    color: ${(p) => p.theme.primary};
  }

  &:focus-visible {
    outline: -webkit-focus-ring-color auto 1px;
  }

  ${(p) => {
    if (p.active) {
      return css`
        color: ${(p) => p.theme.primary};
      `;
    }
  }};

  ${(p) => {
    if (p.disabled) {
      return css`
        opacity: 0.2;
        cursor: not-allowed;
        pointer-events: none;
      `;
    }
  }};
`;
