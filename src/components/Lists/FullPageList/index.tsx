import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';
import {} from 'styled-components/native';
import FullPageListItem from './FullPageListItem';
import {
  FlatListStyled as FlatList,
  FooterContainer,
  FooterText,
} from './styles';

interface ListProps {
  list: any[];
  loading: boolean;
  onEndReached: () => void | undefined;
  onPressItem: (
    event: GestureResponderEvent,
    name: string,
    url: string,
  ) => void;
}

const FullPageList: React.FC<ListProps> = ({
  list,
  onEndReached,
  loading = false,
  onPressItem,
}: ListProps) => {
  return (
    <FlatList
      data={list}
      keyExtractor={({ name }) => name}
      renderItem={({ item: { name, url } }) => {
        return (
          <FullPageListItem name={name} url={url} onPressItem={onPressItem} />
        );
      }}
      ListFooterComponent={
        <FooterContainer>
          {loading ? (
            <ActivityIndicator
              color="red"
              size="large"
              style={{ flex: 1, marginTop: 20 }}
            />
          ) : (
            <FooterText>Gotta catch them all!</FooterText>
          )}
        </FooterContainer>
      }
      onEndReached={onEndReached}
      onEndReachedThreshold={0.9}
    />
  );
};

export default FullPageList;
