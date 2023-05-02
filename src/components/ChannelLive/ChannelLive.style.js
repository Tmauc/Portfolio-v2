import styled from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const LiveWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    flex-direction: column;
  }
`;

export const SideWrapper = styled.div`
  border-radius: 0px;
  background: ${(p) => p.theme.secondaryBackground};
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
  width: fit-content;
`;

export const TwitchPlayerStyle = styled.div`
  height: 300px;
  width: 25vw;
  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    height: 170px;
    width: 100%;
  }
`;

