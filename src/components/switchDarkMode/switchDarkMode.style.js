import styled from 'styled-components';

export const ToggleWrapper = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  overflow: hidden;
  color: white;
  transform: scale(0.6);
  z-index: 1041;
`;

export const Label = styled.label`
  cursor: pointer;
  display: inline-block;
  position: relative;
  width: 90px;
  height: 50px;
  background-color: ${p => p.theme.sky.sky};
  border-radius: 84px;
  transition: background-color 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

export const ToggleHandler = styled.span`
  display: inline-block;
  position: relative;
  z-index: 1042;
  top: 3px;
  left: 3px;
  width: 44px;
  height: 44px;
  background-color: ${p => p.theme.sky.sun};
  border-radius: 50px;
  box-shadow: 0 2px 6px ${p => p.theme.transparent.black03};
  transition: all 400ms cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transform: rotate(-45deg);
`;

export const Crater = styled.span`
  position: absolute;
  background-color: ${p => p.theme.sky.crater};
  opacity: 0;
  transition: opacity 200ms ease-in-out;
  border-radius: 100%;

  &.crater--1 {
    top: 18px;
    left: 10px;
    width: 4px;
    height: 4px;
  }

  &.crater--2 {
    top: 28px;
    left: 22px;
    width: 6px;
    height: 6px;
  }

  &.crater--3 {
    top: 10px;
    left: 25px;
    width: 8px;
    height: 8px;
  }
`;

export const Star = styled.span`
  position: absolute;
  background-color: ${p => p.theme.sky.stars};
  transition: all 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 50%;

  &.star--1 {
    top: 10px;
    left: 35px;
    z-index: 1041;
    width: 30px;
    height: 3px;
  }

  &.star--2 {
    top: 18px;
    left: 28px;
    z-index: 1042;
    width: 30px;
    height: 3px;
  }

  &.star--3 {
    top: 27px;
    left: 40px;
    z-index: 1041;
    width: 30px;
    height: 3px;
  }

  &.star--4,
  &.star--5,
  &.star--6 {
    opacity: 0;
    transition: all 300ms 0 cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &.star--4 {
    top: 16px;
    left: 11px;
    z-index: 1041;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &.star--5 {
    top: 32px;
    left: 17px;
    z-index: 1041;
    width: 3px;
    height: 3px;
    transform: translate3d(3px, 0, 0);
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &.star--6 {
    top: 36px;
    left: 28px;
    z-index: 1041;
    width: 2px;
    height: 2px;
    transform: translate3d(3px, 0, 0);
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;

export const Input = styled.input`
  position: absolute;
  left: -99em;

  &:checked + ${Label} {
    background-color: ${p => p.theme.sky.nightSky};
  }

  &:checked + ${Label}::before {
    color: ${p => p.theme.sky.nightSkyLight};
  }

  &:checked + ${Label}::after {
    color: ${p => p.theme.sky.stars};
  }

  &:checked + ${Label} ${ToggleHandler} {
    background-color: ${p => p.theme.sky.moon};
    transform: translate3d(40px, 0, 0) rotate(0);
  }

  &:checked + ${Label} ${Crater} {
    opacity: 1;
  }

  &:checked + ${Label} ${Star}.star--1 {
    width: 2px;
    height: 2px;
  }

  &:checked + ${Label} ${Star}.star--2 {
    width: 4px;
    height: 4px;
    transform: translate3d(-5px, 0, 0);
  }

  &:checked + ${Label} ${Star}.star--3 {
    width: 2px;
    height: 2px;
    transform: translate3d(-7px, 0, 0);
  }

  &:checked + ${Label} ${Star}.star--4,
  &:checked + ${Label} ${Star}.star--5,
  &:checked + ${Label} ${Star}.star--6 {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  &:checked + ${Label} ${Star}.star--4 {
    transition: all 300ms 200ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:checked + ${Label} ${Star}.star--5 {
    transition: all 300ms 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }

  &:checked + ${Label} ${Star}.star--6 {
    transition: all 300ms 400ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  }
`;