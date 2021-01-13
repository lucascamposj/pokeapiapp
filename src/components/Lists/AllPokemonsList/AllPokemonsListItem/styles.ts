import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 15px 0;
  border-bottom-width: 1px;
  border-bottom-color: #bbb;
`;

export const ItemText = styled.Text`
  text-transform: capitalize;
  font-family: 'RobotoMono-Medium';
  font-size: 19px;
`;
