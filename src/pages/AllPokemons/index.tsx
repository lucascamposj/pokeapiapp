import React, { useEffect, useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GestureResponderEvent } from 'react-native';
import { Container, Header, HeaderTitle } from './styles';
import FullPageList from '../../components/Lists/FullPageList';
import api from '../../services/api';

const LIMIT = 30;
const INITIAL_URL = `/pokemon?limit=${LIMIT}`;

const AllPokemons: React.FC = () => {
  const [pokemons, setPokemons] = useState([]);
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

  const { navigate } = useNavigation();

  const navigateToPokemon = useCallback(
    (e: GestureResponderEvent, name: string, url: string) => {
      navigate('Pokemon', { name, url });
    },
    [navigate],
  );

  return (
    <Container>
      <Header>
        <HeaderTitle>All Pokemon</HeaderTitle>
      </Header>
      <FullPageList
        list={pokemons}
        loading={loading}
        onEndReached={handleUpdate}
        onPressItem={navigateToPokemon}
      />
    </Container>
  );
};

export default AllPokemons;
