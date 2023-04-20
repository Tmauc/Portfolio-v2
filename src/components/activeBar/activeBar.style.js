import styled from 'styled-components';
import { bounceLeft } from 'assets/styles/animations';

export const AlignWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const WrapperActiveBar = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 10px;
  letter-spacing: 5px;

  width: auto;
  height: auto;

  text-transform: uppercase;
  text-decoration: none;
  outline: none;

  color: ${p => p.theme.tertiary};
  text-shadow: 2px 2px 1px ${p => p.theme.secondary};

  &,
  * {
    &::selection {
      background: ${p => p.theme.tertiary};
      color: ${p => p.theme.secondary};
    }
  }

  svg {
    margin-right: 10px;
  }
  animation: ${bounceLeft} 2s linear;
  animation-iteration-count: infinite;
  transition: all 0.2s ease-out;
`;

export const Scroll = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
`;
