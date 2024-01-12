'use client';
// Libraries
// Libraries
import React from 'react';

// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/components/FormElements';
import { MdTextFields } from 'react-icons/md';
import DesignerComponent from '@/components/field-elements/DesignerComponent';

const type: ElementsType = 'TextField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  label: 'Text field',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Value here...',
};
export const TextFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text Field',
      helperText: 'Helper text',
      required: false,
      placeHolder: 'Value here....',
    },
  }),
  designerBtnElement: {
    icon: MdTextFields,
    label: 'Text Field',
  },
  designerComponent: DesignerComponent,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

// Component

// Style

// Types

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}


