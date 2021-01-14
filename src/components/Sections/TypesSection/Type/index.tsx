import React from 'react';
import TypesObject from './types';
import { TypeImage, Container } from './styles';
import { TypeInterface } from '../../../../pages/Pokemon';

const Type: React.FC<TypeInterface> = ({ type }: TypeInterface) => {
  const { name } = type;
  const source = TypesObject[name]?.image;

  return (
    <>
      {source && (
        <Container>
          <TypeImage source={TypesObject[name].image} resizeMode="contain" />
        </Container>
      )}
    </>
  );
};

export default Type;
