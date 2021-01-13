import React from 'react';
import { Container, StatText, StatsContent, StatNumber } from './styles';
import { StatInterface } from '../../../../pages/Pokemon';

const Stat: React.FC<StatInterface> = ({
  stat,
  base_stat,
  effort,
}: StatInterface) => {
  return (
    <Container>
      <StatText>{stat.name}</StatText>
      <StatsContent>
        <StatNumber>{base_stat}</StatNumber>
        <StatNumber>{effort && ` (${effort})`}</StatNumber>
      </StatsContent>
    </Container>
  );
};

export default Stat;
