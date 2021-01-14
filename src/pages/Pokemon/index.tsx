import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import api from '../../services/api';

import { Container } from './styles';
import PokemonCard from '../../components/Cards/PokemonCard';

export interface NamedInterface {
  name: string;
  url: string;
}

export interface TypeInterface {
  slot: number;
  type: NamedInterface;
}

export interface SpriteInterface {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
}

export interface StatInterface {
  stat: NamedInterface;
  effort: number;
  base_stat: number;
}

export interface AbilityInterface {
  ability: NamedInterface;
}

export type FormInterface = NamedInterface;

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  abilities: AbilityInterface[];
  species: NamedInterface;
  stats: StatInterface[];
  forms: FormInterface[];
  types: TypeInterface[];
  sprites: SpriteInterface;
}

interface RouteParams {
  name: string;
  url: string;
}

const AllPokemons: React.FC = () => {
  const { goBack } = useNavigation();
  const route = useRoute();
  const routeParams = route.params as RouteParams;
  const selectedPokemon = {
    url: routeParams.url,
    name: routeParams.name,
  };
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(selectedPokemon.url)
      .then((response) => {
        setPokemon(response.data);
      })
      .catch(() => {
        Alert.alert('Falha ao carregar pokemon', 'Tente novamente!');
        goBack();
      })
      .finally(() => {
        setLoading(false);
      });
  }, [setPokemon, selectedPokemon.url, setLoading, goBack]);

  return (
    <Container>
      <PokemonCard
        pokemon={pokemon}
        backButtonCallback={goBack}
        loading={loading}
      />
    </Container>
  );
};

export default AllPokemons;
