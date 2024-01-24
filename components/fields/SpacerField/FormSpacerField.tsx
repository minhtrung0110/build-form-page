// Libraries
import React from 'react';
import { SpacerFieldInstance } from '@/components/fields/SpacerField/SpacerField';
import { FormElementInstance } from '@/types/FormElements';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const FormSpacerField: React.FC<Props> = (props) => {
  const element = props.elementInstance as SpacerFieldInstance;

  const { height } = element.extraAttributes;
  return <div style={{ height, width: '100%' }}></div>;
};

export default FormSpacerField;