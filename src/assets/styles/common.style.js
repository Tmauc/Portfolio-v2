import styled from 'styled-components';
import { TABLET_WIDTH } from '../../constants/constants';

export const Neumorphism = styled.div`
  border-radius: 0px;
  background: ${p => p.theme.secondaryBackground};
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
  width: fit-content;
`;

export const LargeText = styled.h2`
  display: inline;
  width: fit-content;

  font-size: calc(5000vw / 1080);
  font-weight: 900;
  line-height: 75%;
  text-transform: uppercase;

  z-index: 200;

  transition: all 0.2s ease-out;

  color: ${p => p.theme.secondary};
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: ${p => p.theme.contrastBorder};

  &::after {
    background: ${p => p.theme.bottomBorder};
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 10vw;
  }
`;