import styled, { css } from 'styled-components';
import { TABLET_WIDTH } from 'constants/constants';

export const CarrouselWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow: hidden;
`;

export const CarrouselBtn = styled.button`
  display: flex;
  background-color: transparent;
  border: 0;
  font-size: 50px;
  color: ${(p) => p.theme.tertiary};
  opacity: ${(p) => (p.lastItem || p.firstItem ? 0.2 : 1)};
  cursor: pointer;

  &:hover {
    ${(p) => {
      if (!p.lastItem && !p.firstItem) {
        return css`
          transform: scale(1.2);
        `;
      }
    }}
  }

  @media only screen and (max-width: ${TABLET_WIDTH}px) {
    font-size: 30px;
  }
`;

export const GiftIMG = styled.img`
  transition: 0.5s ease-in-out;
  border-radius: 0px 15px 0px 15px;
`;
