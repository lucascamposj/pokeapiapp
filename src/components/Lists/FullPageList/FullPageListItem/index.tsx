import React from 'react';
import { GestureResponderEvent } from 'react-native';
import { Container, ItemText } from './styles';

export interface ListItemProps {
  name: string;
  url: string;
  onPressItem: (
    event: GestureResponderEvent,
    name: string,
    url: string,
  ) => void;
}

const FullPageListItem: React.FC<ListItemProps> = ({
  name,
  url,
  onPressItem,
}: ListItemProps) => {
  return (
    <Container onPress={(e) => onPressItem(e, name, url)}>
      <ItemText>{name}</ItemText>
    </Container>
  );
};

export default FullPageListItem;
