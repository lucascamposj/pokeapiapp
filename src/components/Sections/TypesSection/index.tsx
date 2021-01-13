import React from 'react';
import Type from './Type';
import { Container } from './styles';
import { TypeInterface } from '../../../pages/Pokemon';

interface TypeSectionProps {
  types: TypeInterface[] | undefined;
}

const TypeSection: React.FC<TypeSectionProps> = ({
  types,
}: TypeSectionProps) => {
  return (
    <Container>
      {types?.map(({ type, slot }) => (
        <Type key={type.name} type={type} slot={slot} />
      ))}
    </Container>
  );
};

export default TypeSection;
