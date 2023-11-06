import styled from "styled-components";

export const CursorInner = styled.div`
  background-color: ${p => p.theme.primary};
  z-index: 1050;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out;
  mix-blend-mode: difference;
`

export const CursorOuter = styled.div`
  z-index: 1050;
  border: solid 2px ${p => p.theme.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition: opacity 0.15s ease-in-out, height 0.2s ease-in-out, width 0.2s ease-in-out;
  mix-blend-mode: difference;
`