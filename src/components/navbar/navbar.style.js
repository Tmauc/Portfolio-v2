import styled, { css } from 'styled-components';
import { orange, purple } from 'assets/styles/colors';

export const Nav = styled.nav`
  position: fixed;
  top: 40%;
  display: flex;
  text-decoration: none;
  width: fit-content;
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

  & > *:not(:last-child) {
    margin-bottom: 50px;
  }
`;

export const Span = styled.span`
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  height: auto;
  width: auto;
`

export const NavItem = styled.li`
  width: 40px;
`;

export const NavLink = styled.a`
  display: flex;
  align-items: center;
  width: fit-content;

  color: ${p => p.theme.tertiary};
  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  ${p => {
    if (p.orange) {
      return css`
        &:hover {
          border-right: 0.5px solid ${orange};
        }
      `
    } else if (p.purple) {
      return css`
        &:hover {
          border-right: 0.5px solid ${purple};
        }
      `
    }
  }};
  
  ${p => {
    if (p.orange) {
      if (p.active) {
        return css`
        color: ${orange};
      `
      }
      return css`
        &:hover {
          border-right: 0.5px solid ${orange};
        }
        &:active {
          color: ${orange};
        }
      `
    } else if (p.purple) {
      if (p.active) {
        return css`
        color: ${purple};
      `
      }
      return css`
        &:hover {
          border-right: 0.5px solid ${purple};
        }
      `
    }
  }};
`