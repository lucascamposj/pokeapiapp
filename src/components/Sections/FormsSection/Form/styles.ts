import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  height: 60px;
  padding: 0;
  margin: 0;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const FormsContent = styled.View`
  flex-direction: row;
`;

export const FormText = styled.Text`
  text-transform: capitalize;
  font-family: 'RobotoMono-Regular';
`;

export const FormNumber = styled.Text`
  text-transform: uppercase;
  font-family: 'RobotoMono-Light';
`;
