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

const FormTitleField: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const element = elementInstance as CustomInstance;


  const { title } = element.extraAttributes;
  return <p className='text-xl font-bold'>{title}</p>;
};

export default FormTitleField;