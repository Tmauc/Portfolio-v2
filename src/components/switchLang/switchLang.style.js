import styled from 'styled-components';

import { LargeText } from 'assets/styles/common.style';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 10px;
`

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

  margin-top: 20px;
  transform: rotate(-90deg);

  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.primary};
  }
`;

export const Separator = styled.div`
  width: 30px;
  height: 1px;
  background-color: ${p => p.theme.tertiary};
`