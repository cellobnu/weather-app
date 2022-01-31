import styled, {css} from 'styled-components/native';

export const ContentView = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  font-size: 20px;
  ${({colorText}) =>
    css`
      color: ${colorText || '#000'};
    `}
`;
