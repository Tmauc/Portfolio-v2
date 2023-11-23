import styled from 'styled-components';

import { LargeText } from 'assets/styles/common.style';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
  height: fit-content;
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

export const LangDesktop = styled.button`
  display: flex;
  color: ${(p) => p.theme.tertiary};
  text-transform: uppercase;
  background: transparent;
  border: 0;
  margin: 0;
  padding: 0;

  &:hover {
    color: ${(p) => p.theme.primary};
  }
`;

export const Separator = styled.div`
  width: 1px;
  height: 30px;
  background-color: ${(p) => p.theme.tertiary};
`;
