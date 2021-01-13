import React from 'react';
import { GestureResponderEvent, TouchableOpacityProps } from 'react-native';

import { Container, ItemText } from './styles';

export interface ListItemProps extends TouchableOpacityProps {
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
  ...rest
}: ListItemProps) => {
  return (
    <Container onPress={(e) => onPressItem(e, name, url)} {...rest}>
      <ItemText>{name}</ItemText>
    </Container>
  );
};

export default FullPageListItem;
