import styled from 'styled-components/native';
import { FlatList } from 'react-native';
import { ListItemProps } from './FullPageListItem';

export const FlatListStyled = styled(
  FlatList as new () => FlatList<ListItemProps>,
)`
  padding: 16px 24px 16px;
`;

export const FooterContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 70px;
`;

export const FooterText = styled.Text`
  text-align: center;
  font-size: 20px;
  margin: 10px 0;
`;
