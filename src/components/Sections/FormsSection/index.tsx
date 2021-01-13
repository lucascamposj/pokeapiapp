import React from 'react';
import Form from './Form';
import { Container } from './styles';
import { FormInterface } from '../../../pages/Pokemon';

interface FormSectionProps {
  forms: FormInterface[] | undefined;
}

const FormSection: React.FC<FormSectionProps> = ({
  forms,
}: FormSectionProps) => {
  return (
    <Container>
      {forms?.map(({ name, url }) => (
        <Form key={name} name={name} url={url} />
      ))}
    </Container>
  );
};

export default FormSection;
