import styled, { css } from 'styled-components';

import {
  LEFT_SIDE,
  RIGHT_SIDE,
  ITSME_ARROW,
  WATCH_ARROW,
  REYES_PULL,
} from 'constants/constants';

export const Wrapper = styled.div`
  position: fixed;
  opacity: .5;

  ${p => {
    if (p.type === ITSME_ARROW) {
      if (p.activeSide === LEFT_SIDE) {
        return css`
          top: 135px;
          right: 70px;  
        `
      } else if (p.activeSide === RIGHT_SIDE) {
        return css`
          top: 150px;
          right: 350px;
        `
      }
    } else if (p.type === WATCH_ARROW) {
      return css`
        top: 500px;
        right: 385px;  
      `
    } else if (p.type === REYES_PULL) {
      return css`
        top: 285px;
        right: 35px;  
      `
    }
  }};
`;

export const Img = styled.img`
  ${p => {
    if (p.type === ITSME_ARROW) {
      if (p.activeSide === LEFT_SIDE) {
        return css`
          width: 100px;
        `
      } else if (p.activeSide === RIGHT_SIDE) {
        return css`
          width: 100px;
          transform: scaleX(-1);
        `
      }
    } else if (p.type === WATCH_ARROW || p.type === REYES_PULL) {
      return css`
        width: 80px; 
      `
    }
  }};
`;

export const Text = styled.p`
  font-family: 'Nanum Pen';
  position: relative;

  ${p => {
    if (p.type === ITSME_ARROW) {
      if (p.activeSide === LEFT_SIDE) {
        return css`
          font-size: 20px;
          top: 17px;
          right: -25px;
          transform: rotate(-12deg);
        `
      } else if (p.activeSide === RIGHT_SIDE) {
        return css`
          font-size: 20px;
          top: 10px;
          right: 30px;
          transform: rotate(-20deg);
        `
      }
    } else if (p.type === WATCH_ARROW) {
      return css`
        font-size: 16px;
        top: 10px;
        right: -20px;
        transform: rotate(-40deg);
      `
    } else if (p.type === REYES_PULL) {
      return css`
        font-size: 14px;
        top: 15px;
        right: -25px;
        transform: rotate(30deg);  
      `
    }
  }};
`;
