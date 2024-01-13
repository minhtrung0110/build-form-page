'use client';
// Libraries
// Libraries
import React from 'react';
import { z } from 'zod';
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { MdTextFields } from 'react-icons/md';
import DesignerComponent from '@/components/field-elements/DesignerComponent';
import PropertiesComponent from '@/components/field-elements/PropertiesComponent';

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

export const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

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
  propertiesComponent: PropertiesComponent,
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


