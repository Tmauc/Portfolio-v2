import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  right: 30px;
`;

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(3);
  grid-template-rows: repeat(3);
  grid-column-gap: 6px;
  grid-row-gap: 6px;
`;

export const Card = styled.a`
  width: 30px;
  height: 30px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: 0.4s ease-in-out, 0.2s background-color ease-in-out,
    0.2s background-image ease-in-out;
  backdrop-filter: 5px;
  border: 1px solid transparent;
  -webkit-backdrop-filter: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  background: rgba(42, 42, 42, 0.6);
  color: ${(p) => p.theme.text.white};

  border-radius: 10px;

  &:hover {
    background-color: ${(p) => p.color} !important;
  }

  &:nth-child(1) {
    grid-area: 1 / 3 / 2 / 4;
  }
  &:nth-child(2) {
    grid-area: 2 / 2 / 3 / 3;
  }
  &:nth-child(3) {
    grid-area: 2 / 3 / 3 / 4;
  }
  &:nth-child(4) {
    grid-area: 3 / 1 / 4 / 2;
  }
  &:nth-child(5) {
    grid-area: 3 / 2 / 4 / 3;
  }
  &:nth-child(6) {
    grid-area: 1 / 2 / 2 / 3;
  }
  &:nth-child(7) {
    grid-area: 2 / 1 / 3 / 2;
  }
`;
