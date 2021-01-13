import React from 'react';
import { Container, Header, HeaderTitle } from './styles';
import AllPokemonsList from '../../components/Lists/AllPokemonsList';

const AllPokemons: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderTitle>All Pokemon</HeaderTitle>
      </Header>
      <AllPokemonsList />
    </Container>
  );
};

export default AllPokemons;
