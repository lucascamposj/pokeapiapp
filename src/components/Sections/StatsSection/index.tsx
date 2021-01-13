import React from 'react';
import Stat from './Stats';
import { Container } from './styles';
import { StatInterface } from '../../../pages/Pokemon';

interface StatSectionProps {
  stats: StatInterface[] | undefined;
}

const StatSection: React.FC<StatSectionProps> = ({
  stats,
}: StatSectionProps) => {
  return (
    <Container>
      {stats?.map(({ stat, base_stat, effort }) => (
        <Stat
          key={stat.name}
          stat={stat}
          base_stat={base_stat}
          effort={effort}
        />
      ))}
    </Container>
  );
};

export default StatSection;
