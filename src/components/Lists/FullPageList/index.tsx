import React from 'react';
import { ActivityIndicator, GestureResponderEvent } from 'react-native';
import {} from 'styled-components/native';
import FullPageListItem from './FullPageListItem';
import {
  FlatListStyled as FlatList,
  FooterContainer,
  FooterText,
} from './styles';

interface ListProps<T> {
  pokemons: T;
  loading: boolean;
  onEndReached: () => void | undefined;
  onPressItem: (
    event: GestureResponderEvent,
    name: string,
    url: string,
  ) => void;
}

const FullPageList: React.FC<ListProps<any[]>> = ({
  pokemons,
  onEndReached,
  loading = false,
  onPressItem,
}: ListProps<any[]>) => {
  return (
    <FlatList
      data={pokemons}
      keyExtractor={({ name }) => name}
      renderItem={({ item: { name, url } }) => (
        <FullPageListItem name={name} url={url} onPressItem={onPressItem} />
      )}
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
