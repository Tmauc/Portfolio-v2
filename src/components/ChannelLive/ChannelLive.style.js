import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const LiveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    flex-direction: column;
  }
`;

export const TwitchPlayerStyle = styled.div`
  height: auto;
  width: 100%;
  aspect-ratio: 16 / 9;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: auto;
    width: 100%;
  }
`;

