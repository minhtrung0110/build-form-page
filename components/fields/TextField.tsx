'use client';
// Libraries
import React from 'react';

// Component
// Style
// Types
import { ElementsType, FormElement } from '@/components/FormElements';
import { MdTextFields } from 'react-icons/md';

const type: ElementsType = 'TextField';

interface Props {
  // Define your component's props here
}

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
  designerComponent: () => <div>Designer Component</div>,
  formComponent: () => <div>Form Component</div>,
  propertiesComponent: () => <div>Properties Component</div>,
};

