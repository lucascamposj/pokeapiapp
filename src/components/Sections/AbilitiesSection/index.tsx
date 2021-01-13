import React from 'react';
import Ability from './Ability';
import { Container } from './styles';
import { AbilityInterface } from '../../../pages/Pokemon';

interface AbilitySectionProps {
  abilities: AbilityInterface[] | undefined;
}

const AbilitySection: React.FC<AbilitySectionProps> = ({
  abilities,
}: AbilitySectionProps) => {
  return (
    <Container>
      {abilities?.map(({ ability }) => (
        <Ability key={ability.name} ability={ability} />
      ))}
    </Container>
  );
};

export default AbilitySection;
