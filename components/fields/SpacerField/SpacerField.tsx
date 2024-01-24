'use client';
// Libraries
import { z } from 'zod';
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { LuSeparatorHorizontal } from 'react-icons/lu';
import DesignerSpacerField from '@/components/fields/SpacerField/DesignerSpacerField';
import FormSpacerField from '@/components/fields/SpacerField/FormSpacerField';
import PropertiesSpacerField from '@/components/fields/SpacerField/PropertiesSpacerField';

const type: ElementsType = 'SpacerField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  height: 20,
};

export const propertiesSchema = z.object({
  height: z.number().min(2).max(50),
});

export const SpacerFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerBtnElement: {
    icon: LuSeparatorHorizontal,
    label: 'Spacer Field',
  },
  designerComponent: DesignerSpacerField,
  formComponent: FormSpacerField,
  propertiesComponent: PropertiesSpacerField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as SpacerFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type SpacerFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

// Component

// Style

// Types


