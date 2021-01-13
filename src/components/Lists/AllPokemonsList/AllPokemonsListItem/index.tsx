import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, ItemText } from './styles';

export interface PokemonListItem {
  name: string;
  url: string;
}

const AllPokemonsListItem: React.FC<PokemonListItem> = (pokemon) => {
  const { navigate } = useNavigation();

  const navigateToPokemon = useCallback(() => {
    navigate('Pokemon', { name: pokemon.name, url: pokemon.url });
  }, [navigate, pokemon]);

  return (
    <Container onPress={navigateToPokemon}>
      <ItemText>{pokemon.name}</ItemText>
    </Container>
  );
};

export default AllPokemonsListItem;
