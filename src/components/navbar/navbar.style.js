import styled, { css } from 'styled-components';

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
  
  &:hover {
    border-right: 0.5px solid ${p => p.theme.primary};
  }
  
  &:active {
    color: ${p => p.theme.primary};
  }
  
  ${p => {
    if (p.active) {
      return css`
        color: ${p => p.theme.primary};
      `
    }
  }};

  ${p => {
    if (p.disabled) {
      return css`
        opacity: .2;
        cursor: not-allowed;
        pointer-events: none;
      `
    }
  }};
`