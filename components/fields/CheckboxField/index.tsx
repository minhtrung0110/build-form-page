// Libraries
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { z } from 'zod';
import { IoMdCheckbox } from 'react-icons/io';
import DesignerComponent from '@/components/fields/CheckboxField/DesignerComponent';
import FormComponent from '@/components/fields/CheckboxField/FormComponent';
import PropertiesComponent from '@/components/fields/CheckboxField/PropertiesComponent';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const type: ElementsType = 'CheckboxField';

const extraAttributes = {
  label: 'Checkbox field',
  helperText: 'Helper text',
  required: false,
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});
export const CheckboxFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id, type, extraAttributes,
  }),
  designerBtnElement: {
    icon: IoMdCheckbox,
    label: 'CheckBox Field',
  },
  designerComponent: DesignerComponent,
  formComponent: FormComponent,
  propertiesComponent: PropertiesComponent,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as CustomInstanceCheckboxField;
    if (element.extraAttributes.required) {
      return currentValue === 'true';
    }
    return true;
  },

};
export type CustomInstanceCheckboxField = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};