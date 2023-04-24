import styled from 'styled-components';
import { btnAnim } from '../../assets/styles/animations';
import { Neumorphism } from '../../assets/styles/common.style';

export const LoginBox = styled(Neumorphism)`
  width: 100%;
  padding: 40px !important;
`;

export const Form = styled.form``;

export const UserBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${p => p.theme.tertiary};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${p => p.theme.tertiary};
  outline: none;
  background: transparent;
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: ${p => p.theme.tertiary};
    font-size: 12px;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  padding: 10px 0;
  font-size: 16px;
  color: ${p => p.theme.tertiary};
  pointer-events: none;
  transition: 0.5s;
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: ${p => p.theme.tertiary};
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid ${p => p.theme.tertiary};
  outline: none;
  background: transparent;
  &:focus ~ label,
  &:valid ~ label {
    top: -20px;
    left: 0;
    color: ${p => p.theme.tertiary};
    font-size: 12px;
  }
`;

export const Button = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: ${p => p.theme.tertiary};
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  letter-spacing: 4px;
  background-color: transparent;
  border: 0;
  &:hover {
    color: ${p => p.theme.tertiary};
    border-radius: 5px;
    background-color: ${p => p.theme.primary};
  }
`;

export const Span = styled.span`
  position: absolute;
  display: block;
  &:nth-child(1) {
    background: linear-gradient(90deg, transparent, ${p => p.theme.primary});
  }

  &:nth-child(1) {
    bottom: 2px;
    left: -100%;
    width: 100%;
    height: 2px;
    animation: ${btnAnim} 2s linear infinite;
    animation-iteration-count: infinite;
    background: linear-gradient(90deg, transparent, ${p => p.theme.primary});
  }
`