import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 30px;
  right: 30px;
`

export const WrapperBack = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`

export const Icon = styled.div`
  svg {
    width: 50px;
    height: 50px;
  }
`

export const Text = styled.p`
  font-size: 8px;
  transition: .4s ease-in-out;
  color: ${p => p.theme.tertiary};
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.33em;
`

export const MainBack = styled.div`
  position: absolute;
  border-radius: 10px;
  transition: 2s ease-in-out;
  transform: rotate(90deg);
  width: 6em;
  height: 6em;
  background: ${p => p.theme.secondary};
`

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 7em;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover ${MainBack} {
    opacity: 0;
    z-index: -3;
  }

  &:hover .card {
    margin: .2em;
    border-radius: 10px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    background: rgba(255, 255, 255, 0.2);

    svg {
      opacity: 1;
    }
  }

  &:hover ${WrapperBack} {
    opacity: 0;
    z-index: -3;
  }
`

export const Card = styled.a`
  width: 30px;
  height: 30px;
  border-top-left-radius: 10px;
  background: lightgrey;
  transition: .4s ease-in-out, .2s background-color ease-in-out, .2s background-image ease-in-out;
  backdrop-filter: 5px;
  border: 1px solid transparent;
  -webkit-backdrop-filter: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  background-color: ${p => p.theme.secondary};
  color: ${p => p.theme.text.white};

  svg {
    opacity: 0;
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
    background-color: ${p => p.color} !important;
  }
`;