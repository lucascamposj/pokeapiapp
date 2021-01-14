import React, { useMemo } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';

import TypesObject from '../../Sections/TypesSection/Type/types';

import BackIcon from '../../../assets/svg/icons/angle-left.svg';
import { Pokemon } from '../../../pages/Pokemon';
import Ruler from '../../../assets/svg/icons/ruler.svg';
import Weight from '../../../assets/svg/icons/weight.svg';
import TypesSection from '../../Sections/TypesSection';
import StatsSection from '../../Sections/StatsSection';
import AbilitiesSection from '../../Sections/AbilitiesSection';
import FormsSection from '../../Sections/FormsSection';

import {
  Container,
  MainCard,
  XPContainer,
  XPText,
  SpritesContainer,
  Sprite,
  SpriteSelector,
  NameContainer,
  NameText,
  IdText,
  HeightAndWeightContainer,
  HeightContainer,
  HeightText,
  WeightContainer,
  WeightText,
  SpeciesContainer,
  SpeciesText,
  Separator,
  SectionTitle,
  Header,
  HeaderBar,
  BackButton,
} from './styles';

interface PokemonCardProps {
  pokemon: Pokemon | undefined;
  loading: boolean;
  backButtonCallback: () => void;
}

const getPokemonFirstType = (pokemon: Pokemon | undefined) => {
  const firstType = pokemon && pokemon?.types ? pokemon.types[0] : null;
  const mainColor =
    firstType && firstType?.type.name
      ? TypesObject[firstType?.type.name].color
      : 'red';
  return mainColor;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  loading,
  backButtonCallback,
}: PokemonCardProps) => {
  const mainColor = useMemo(() => pokemon && getPokemonFirstType(pokemon), [
    pokemon,
  ]);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" style={{ flex: 1 }} color="red" />
      ) : (
        <>
          <Header color={!loading && mainColor ? mainColor : '#FFF'}>
            <HeaderBar>
              <BackButton onPress={backButtonCallback}>
                <BackIcon height={30} width={30} color="#FFF" />
              </BackButton>
            </HeaderBar>
            <SpritesContainer>
              <Sprite
                resizeMode="contain"
                source={{ uri: pokemon?.sprites.front_default }}
              />
              <SpriteSelector />
            </SpritesContainer>
          </Header>

          <ScrollView scrollIndicatorInsets={{ right: 1 }}>
            <Container>
              <MainCard>
                <XPContainer>
                  <XPText>{`${pokemon?.base_experience} XP`}</XPText>
                </XPContainer>
                <NameContainer>
                  <NameText>{pokemon?.name}</NameText>
                  <IdText>{`#${pokemon?.id}`}</IdText>
                </NameContainer>
                <HeightAndWeightContainer>
                  <HeightContainer>
                    <Ruler height={28} width={28} color="#333" />
                    <HeightText>{pokemon?.height}</HeightText>
                  </HeightContainer>
                  <WeightContainer>
                    <Weight height={23} width={23} color="#333" />
                    <WeightText>{pokemon?.weight}</WeightText>
                  </WeightContainer>
                </HeightAndWeightContainer>
                <SpeciesContainer>
                  <SpeciesText>{`species: ${pokemon?.species.name}`}</SpeciesText>
                </SpeciesContainer>
                <TypesSection types={pokemon?.types} />
                <Separator />
                <SectionTitle>Stats</SectionTitle>
                <StatsSection stats={pokemon?.stats} />
                <Separator />
                <SectionTitle>Abilities</SectionTitle>
                <AbilitiesSection abilities={pokemon?.abilities} />
                <Separator />
                <SectionTitle>Forms</SectionTitle>
                <FormsSection forms={pokemon?.forms} />
              </MainCard>
            </Container>
          </ScrollView>
        </>
      )}
    </>
  );
};

export default PokemonCard;
