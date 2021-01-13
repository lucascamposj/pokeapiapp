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

export const AbilitiesContent = styled.View`
  flex-direction: column;
`;

export const AbilityText = styled.Text`
  text-transform: capitalize;
  font-family: 'RobotoMono-Regular';
`;

export const AbilityNumber = styled.Text`
  text-transform: uppercase;
  font-family: 'RobotoMono-Light';
`;
