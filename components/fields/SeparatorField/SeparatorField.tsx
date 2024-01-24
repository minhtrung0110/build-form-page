'use client';
// Libraries
// Libraries
// Component
// Style
// Types
import { ElementsType, FormElement, FormElementInstance } from '@/types/FormElements';
import { RiSeparator } from 'react-icons/ri';
import PropertiesSeparatorField from '@/components/fields/SeparatorField/PropertiesSeparatorField';
import FormSeparatorField from '@/components/fields/SeparatorField/FormSeparatorField';
import DesignerSeparatorField from '@/components/fields/SeparatorField/DesignerSeparatorField';

const type: ElementsType = 'SeparatorField';

interface Props {
  // Define your component's props here
}

export const SeparatorFieldFormElement: FormElement = {
  type,
  construct: (id: string) => ({
    id,
    type,
  }),
  designerBtnElement: {
    icon: RiSeparator,
    label: 'Separator Field',
  },
  designerComponent: DesignerSeparatorField,
  formComponent: FormSeparatorField,
  propertiesComponent: PropertiesSeparatorField,
  validate: () => true,
};

// Component

// Style

// Types

interface DesignerComponentProps {
  elementInstance: FormElementInstance;
}


