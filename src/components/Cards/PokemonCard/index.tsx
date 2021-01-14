import React, { useMemo } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { DefaultTheme } from 'styled-components/native';

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
  theme: DefaultTheme;
}

const getPokemonFirstType = (pokemon: Pokemon | undefined): string | null => {
  const firstType =
    pokemon?.types && pokemon.types.length > 0 ? pokemon.types[0] : null;
  const headerColor =
    firstType && firstType?.type.name
      ? TypesObject[firstType?.type.name].color
      : null;
  return headerColor;
};

const PokemonCard: React.FC<PokemonCardProps> = ({
  pokemon,
  loading,
  backButtonCallback,
  theme,
}: PokemonCardProps) => {
  const headerColor = useMemo(() => {
    if (pokemon && !loading) {
      const color = getPokemonFirstType(pokemon);
      return color || theme.colors.primary.main;
    }
    return theme.colors.common.white;
  }, [pokemon, loading, theme.colors]);

  const baseExperienceFormatted = useMemo(() => {
    return `${pokemon?.base_experience} XP`;
  }, [pokemon?.base_experience]);

  const idFormatted = useMemo(() => {
    return `#${pokemon?.id}`;
  }, [pokemon?.id]);

  const speciesFormatted = useMemo(() => {
    return `species: ${pokemon?.species.name}`;
  }, [pokemon?.species]);

  if (loading) {
    return <ActivityIndicator size="large" style={{ flex: 1 }} color="red" />;
  }

  return (
    <>
      <Header color={headerColor}>
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
              <XPText>{baseExperienceFormatted}</XPText>
            </XPContainer>
            <NameContainer>
              <NameText>{pokemon?.name}</NameText>
              <IdText>{idFormatted}</IdText>
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
              <SpeciesText>{speciesFormatted}</SpeciesText>
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
  );
};

export default PokemonCard;
