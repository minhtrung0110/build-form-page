'use client';
// Libraries
// Libraries
import { z } from 'zod';
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import DesignerTitleField from '@/components/fields/TitleField/DesignerTitleField';
import FormTitleField from '@/components/fields/TitleField/FormTitleField';
import PropertiesTitleField from '@/components/fields/TitleField/PropertiesTitleField';
import { LuHeading1 } from 'react-icons/lu';

const type: ElementsType = 'TitleField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  title: 'Title field',
};

export const propertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export const TitleFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      title: 'Title field',
    },
  }),
  designerBtnElement: {
    icon: LuHeading1,
    label: 'Title Field',
  },
  designerComponent: DesignerTitleField,
  formComponent: FormTitleField,
  propertiesComponent: PropertiesTitleField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as CustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type CustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};



