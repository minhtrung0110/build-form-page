// Libraries
import React from 'react';
import FormCard from '@/app/(dashboard)/components/FormCard';
import { GetForms } from '@/actions/form';
import { Form } from '@prisma/client';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const FormCardGroup: React.FC<Props> = async (props) => {

  const forms: Form[] = await GetForms();
  return (
    <>
      {forms.map((form: Form) => (
        <FormCard key={form.id} form={form} />
      ))}
    </>
  );

};

export default FormCardGroup;