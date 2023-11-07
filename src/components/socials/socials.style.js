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
  width: 7em;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover .card {
    margin: 0.2em;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.2);

    svg {
      opacity: 1;
    }
  }
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
  background-color: ${(p) => p.theme.secondary};
  background: rgba(255, 255, 255, 0.2);
  color: ${(p) => p.theme.text.white};

  svg {
    opacity: 1;
  }

  &:nth-child(2),
  &:nth-child(4),
  &:nth-child(5),
  &:nth-child(6),
  &:nth-child(8) {
    border-radius: 0px;
  }

  &:nth-child(3) {
    border-top-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  &:nth-child(7) {
    border-bottom-left-radius: 10px;
    border-top-left-radius: 0px;
  }

  &:nth-child(9) {
    border-bottom-right-radius: 10px;
    border-top-left-radius: 0px;
  }

  &:hover {
    background-color: ${(p) => p.color} !important;
  }
`;
