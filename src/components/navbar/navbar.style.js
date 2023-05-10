import styled, { css } from 'styled-components';

export const Nav = styled.nav`
  position: fixed;
  bottom: 5%;
  left: 10px;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: fit-content;
  height: 90vh;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: auto;
  list-style: none;
  margin: 0;
  margin-block-start: 0;
  margin-block-end: 0;
  padding-inline-start: 0px;

  height: 100%;
  margin-bottom: 40px;

  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const Span = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  height: auto;
  width: auto;
`;

export const NavItem = styled.li`
  width: 40px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;

  color: ${(p) => p.theme.tertiary};
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  &:hover {
    border-right: 0.5px solid ${(p) => p.theme.primary};
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
