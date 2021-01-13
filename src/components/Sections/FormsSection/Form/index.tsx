import React from 'react';
import { Container, FormText } from './styles';
import { FormInterface } from '../../../../pages/Pokemon';

const Form: React.FC<FormInterface> = ({ name }: FormInterface) => {
  return (
    <Container>
      <FormText>{name}</FormText>
    </Container>
  );
};

export default Form;
