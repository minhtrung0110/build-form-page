'use client';
// Libraries
// Libraries
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import DesignerTextAreaField from '@/components/fields/TextAreaField/DesignerTextAreaField';
import { BsTextareaResize } from 'react-icons/bs';
import FormTextAreaField from '@/components/fields/TextAreaField/FormTextAreaField.tsx';
import PropertiesTextAreaField from '@/components/fields/TextAreaField/PropertiesTextAreaField';

const type: ElementsType = 'TextAreaField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  label: 'Text area',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Value here...',
  rows: 3,
};

export const TextAreaFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Text Area Field',
      helperText: 'Helper text',
      required: false,
      placeHolder: 'Value here....',
    },
  }),
  designerBtnElement: {
    icon: BsTextareaResize,
    label: 'TextArea Field',
  },
  designerComponent: DesignerTextAreaField,
  formComponent: FormTextAreaField,
  propertiesComponent: PropertiesTextAreaField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as TextAreaFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type TextAreaFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};



