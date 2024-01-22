// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { SubTitleCustomInstance } from '@/components/fields/SubTitleFieldFormElement/SubTitleField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const FormSubTitleField: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const element = elementInstance as SubTitleCustomInstance;


  const { title } = element.extraAttributes;
  return <p className='text-lg'>{title}</p>;
};

export default FormSubTitleField;