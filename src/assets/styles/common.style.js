import styled from 'styled-components';

export const Neumorphism = styled.div`
  border-radius: 0px;
  background: ${p => p.theme.secondaryBackground};
  padding: 10px;
  & > *:not(:last-child) {
    margin-bottom: 5px;
  }
  width: fit-content;
`;