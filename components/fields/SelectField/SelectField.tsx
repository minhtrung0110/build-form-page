import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { RxDropdownMenu } from 'react-icons/rx';
import DesignerSelectField from '@/components/fields/SelectField/DesignerSelectField';
import FormSelectField from '@/components/fields/SelectField/FormSelectField';
import PropertiesSelectField from '@/components/fields/SelectField/PropertiesSelectField';

const type: ElementsType = 'SelectField';

const extraAttributes = {
  label: 'Select field',
  helperText: 'Helper text',
  required: false,
  placeHolder: 'Value here...',
  options: [],
};

export const SelectFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: RxDropdownMenu,
    label: 'Select Field',
  },
  designerComponent: DesignerSelectField,
  formComponent: FormSelectField,
  propertiesComponent: PropertiesSelectField,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as SelectFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type SelectFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};