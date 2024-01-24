import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import DesignerDateField from '@/components/fields/DateField/DesignerDateField';
import FormDateField from '@/components/fields/DateField/FormDateField';
import PropertiesDateField from '@/components/fields/DateField/PropertiesDateField';

const type: ElementsType = 'DateField';

const extraAttributes = {
  label: 'Date field',
  helperText: 'Pick a date',
  required: false,
};

export const DateFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: BsFillCalendarDateFill,
    label: 'Date Field',
  },
  designerComponent: DesignerDateField,
  formComponent: FormDateField,
  propertiesComponent: PropertiesDateField,

  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as DateFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type DateFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};
