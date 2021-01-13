import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator } from 'react-native';
import AllPokemonsListItem, { PokemonListItem } from './AllPokemonsListItem';
import {
  FlatListStyled as FlatList,
  FooterContainer,
  FooterText,
} from './styles';
import api from '../../../services/api';

const LIMIT = 50;
const INITIAL_URL = `/pokemon?limit=${LIMIT}`;

const AllPokemonsList: React.FC = () => {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [currentUrl, setCurrentUrl] = useState(INITIAL_URL);
  const [nextUrl, setNextUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(currentUrl)
      .then(({ data }) => {
        const { results, next } = data;
        setPokemons((currentList) => currentList.concat(results));
        setNextUrl(next);
      })
      .catch((err) => {
        // console.log(err);
      });
  }, [setPokemons, setNextUrl, currentUrl]);

  const handleUpdate = useCallback(() => {
    if (nextUrl) {
      setCurrentUrl(nextUrl);
    } else {
      setLoading(false);
    }
  }, [setCurrentUrl, nextUrl]);

  return (
    <FlatList
      data={pokemons}
      keyExtractor={({ name }) => name}
      renderItem={({ item: { name, url } }) => (
        <AllPokemonsListItem name={name} url={url} />
      )}
      ListFooterComponent={
        <FooterContainer>
          {loading ? (
            <ActivityIndicator color="red" size="large" style={{ flex: 1 }} />
          ) : (
            <FooterText>Gotta catch them all!</FooterText>
          )}
        </FooterContainer>
      }
      onEndReached={handleUpdate}
      onEndReachedThreshold={0.9}
    />
  );
};

export default AllPokemonsList;
