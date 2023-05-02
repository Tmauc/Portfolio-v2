import styled from 'styled-components';
import { scrollFade } from 'assets/styles/animations';
import { TABLET_WIDTH } from 'constants/constants';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 40px;
  left: 70px;

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    bottom: 30px;
    left: 0;
  }
`;

export const Span = styled.span`
  display: block;
  width: 15px;
  height: 15px;
  border-left: 1px solid ${p => p.theme.tertiary};
  border-bottom: 1px solid ${p => p.theme.tertiary};
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: ${scrollFade} 1.5s infinite;
  animation: ${scrollFade} 1.5s infinite;
  box-sizing: border-box;
`;