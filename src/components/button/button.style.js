import styled from "styled-components";
import { TABLET_WIDTH } from 'constants/constants';

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 30px;
  min-height: 30px;

  border-radius: 50%;
  background-color: ${p => p.theme.transparent.white02};

  margin-right: 20px;

  transition: all 0.3s;

  svg {
    transition: all 0.3s;
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    margin-right: 10px;
  }
`

export const ButtonWrapper = styled.a`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  
  padding: 10px 20px;

  border: 0;
  border-radius: 5px;
  color: ${(p) => p.theme.text.white};
  background-color: ${(p) => p.theme.primary};
  background-image: linear-gradient(
    30deg,
    ${(p) => p.theme.primary} 40%,
    ${(p) => p.theme.primaryDark} 100%
  );

  letter-spacing: 4px;
  text-decoration: none;
  text-transform: uppercase;
  
  overflow: hidden;
  
  transition: 0.5s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0px 8px 15px ${p => p.theme.transparent.black03};
  }

  &:hover ${Icon} {
    background-color: ${p => p.theme.transparent.white05};
    svg {
      transform: rotate(45deg);
    }
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    padding: 10px 10px;
  }
`;