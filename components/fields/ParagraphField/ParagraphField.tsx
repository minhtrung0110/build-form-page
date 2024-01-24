'use client';
// Libraries
// Libraries
import { z } from 'zod';
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import DesignerParagraphField from '@/components/fields/ParagraphField/DesignerComponent';
import FormParagraphField from '@/components/fields/ParagraphField/FormComponent';
import PropertiesParagraphField from '@/components/fields/ParagraphField/PropertiesComponent';
import { BsTextParagraph } from 'react-icons/bs';

const type: ElementsType = 'ParagraphField';

interface Props {
  // Define your component's props here
}

const extraAttributes = {
  text: 'Paragraph field',
};

export const propertiesSchema = z.object({
  text: z.string().min(2).max(1000),
});

export const ParagraphFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
    extraAttributes: {
      text: 'Paragraph field',
    },
  }),
  designerBtnElement: {
    icon: BsTextParagraph,
    label: 'Paragraph field',
  },
  designerComponent: DesignerParagraphField,
  formComponent: FormParagraphField,
  propertiesComponent: PropertiesParagraphField,
  validate: (formElement: FormElementInstance, currentValue: string): boolean => {
    const element = formElement as ParagraphFieldInstance;
    if (element.extraAttributes.required) {
      return currentValue.length > 0;
    }

    return true;
  },
};

export type ParagraphFieldInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

// Component

// Style

// Types

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}


