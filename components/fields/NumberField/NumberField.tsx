'use client';
// Libraries
// Libraries
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { Bs123 } from 'react-icons/bs';
import DesignerNumberField from '@/components/fields/NumberField/DesignerNumberField';
import FormNumberField from '@/components/fields/NumberField/FormNumberField';
import PropertiesNumberField from '@/components/fields/NumberField/PropertiesNumberField';

const type: ElementsType = 'NumberField';

interface Props {
  // Define your component's props here
}

export const extraAttributes = {
  label: 'Number field',
  helperText: 'Helper text',
  required: false,
  placeHolder: '0',
};

export const NumberFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      label: 'Number Field',
      helperText: 'Helper text',
      required: false,
      placeHolder: 'Value here....',
    },
  }),
  designerBtnElement: {
    icon: Bs123,
    label: 'Number Field',
  },
  designerComponent: DesignerNumberField,
  formComponent: FormNumberField,
  propertiesComponent: PropertiesNumberField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as NumberFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type NumberFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};



