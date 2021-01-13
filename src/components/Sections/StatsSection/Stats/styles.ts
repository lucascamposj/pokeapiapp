import styled from 'styled-components/native';

export const Container = styled.View`
  height: 60px;
  width: 100%;
  padding: 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const StatsContent = styled.View`
  flex-direction: row;
`;

export const StatText = styled.Text`
  text-transform: uppercase;
  font-family: 'RobotoMono-Bold';
`;

export const StatNumber = styled.Text`
  text-transform: uppercase;
  font-family: 'RobotoMono-Light';
`;
