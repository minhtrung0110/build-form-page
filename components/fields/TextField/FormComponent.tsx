// Libraries
import React from 'react';
import { CustomInstance } from '@/components/fields/TextField/TextField';
import { FormElementInstance } from '@/types/FormElements';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const FormComponent: React.FC<Props> = (props) => {
  const element = props.elementInstance as CustomInstance;

  const { title } = element.extraAttributes;
  return <p className='text-xl'>{title}</p>;
};

export default FormComponent;