import styled from 'styled-components';
import { TABLET_WIDTH } from '../../constants/constants';

export const TwitchPlayerStyle = styled.div`
  height: 300px;
  width: 25vw;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 170px;
    width: 100%;
  }
`;

export const LiveWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    flex-direction: column;
  }
`;
