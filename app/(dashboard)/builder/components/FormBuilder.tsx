// Libraries
import React from 'react';
import { Form } from '@prisma/client';

// Component

// Style

// Types


interface Props {
  form: Form;
}

const FormBuilder: React.FC<Props> = (props) => {
  const { form } = props;
  return (
    <>

      <div className='flex flex-col items-center justify-center h-full w-full'>
        <h1>{form.name}</h1>
      </div>
    </>
  );
};

export default FormBuilder;