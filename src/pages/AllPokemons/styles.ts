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
  justify-content: space-between;
  align-items: center;
  shadow-color: #f00;
  shadow-offset: 0 8px;
  shadow-opacity: 0.75;
  shadow-radius: 18px;

  elevation: 17;
`;
export const HeaderTitle = styled.Text`
  color: #f4ede8;
  font-size: 24px;
  font-weight: bold;
  font-family: 'RobotoMono-Regular';
  line-height: 28px;
`;
