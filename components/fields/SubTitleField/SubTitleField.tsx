'use client';
// Libraries
// Libraries
import { z } from 'zod';
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';

import { LuHeading2 } from 'react-icons/lu';
import DesignerSubTitleField from '@/components/fields/SubTitleField/DesignerSubTitleField';
import FormSubTitleField from '@/components/fields/SubTitleField/FormSubTitleField';
import PropertiesSubTitleField from '@/components/fields/SubTitleField/PropertiesSubTitleField';

const type: ElementsType = 'SubTitleField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  title: 'SubTitle field',
};

export const propertiesSchema = z.object({
  title: z.string().min(2).max(50),
});

export const SubTitleFieldElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      title: 'SubTitle field',
    },
  }),
  designerBtnElement: {
    icon: LuHeading2,
    label: 'SubTitle Field',
  },
  designerComponent: DesignerSubTitleField,
  formComponent: FormSubTitleField,
  propertiesComponent: PropertiesSubTitleField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as SubTitleCustomInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type SubTitleCustomInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};



