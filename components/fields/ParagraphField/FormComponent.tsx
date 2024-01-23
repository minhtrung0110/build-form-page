// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { ParagraphFieldInstance } from '@/components/fields/ParagraphField/ParagraphField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const FormParagraphField: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const element = elementInstance as ParagraphFieldInstance;

  const { text } = element.extraAttributes;
  return (
    <p className='text-muted-foreground'>{text}</p>
  );
};

export default FormParagraphField;