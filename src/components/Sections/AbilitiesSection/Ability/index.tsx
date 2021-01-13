import React from 'react';
import { Container, AbilityText } from './styles';
import { AbilityInterface } from '../../../../pages/Pokemon';

const Ability: React.FC<AbilityInterface> = ({ ability }: AbilityInterface) => {
  return (
    <Container>
      <AbilityText>{ability.name}</AbilityText>
    </Container>
  );
};

export default Ability;
