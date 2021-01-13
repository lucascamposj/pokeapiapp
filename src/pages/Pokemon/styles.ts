import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  padding: 24px;
  padding-top: ${getStatusBarHeight() + 24}px;
  background: #f00;

  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  font-weight: bold;
  font-family: 'RobotoMono-Regular';
  line-height: 28px;
  text-transform: capitalize;
`;

export const BackButton = styled.TouchableOpacity`
  padding: 2px;
  margin-right: 15px;
`;
