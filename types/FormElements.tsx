import { TextFieldFormElement } from '../components/fields/TextField/TextField';
import React from 'react';
import { CheckboxFieldFormElement } from '@/components/fields/CheckboxField';
import { TitleFieldFormElement } from '@/components/fields/TitleField/TitleFieldFormElement';
import { SubTitleFieldElement } from '@/components/fields/SubTitleField/SubTitleField';
import { ParagraphFieldFormElement } from '@/components/fields/ParagraphField/ParagraphField';
import { SeparatorFieldFormElement } from '@/components/fields/SeparatorField/SeparatorField';
import { SpacerFieldFormElement } from '@/components/fields/SpacerField/SpacerField';

export type ElementsType =
  | 'TextField'
  | 'TitleField'
  | 'SubTitleField'
  | 'ParagraphField'
  | 'SeparatorField'
  | 'SpacerField'
  | 'NumberField'
  | 'TextAreaField'
  | 'DateField'
  | 'SelectField'
  | 'CheckboxField';

export type SubmitFunction = (key: string, value: string) => void;

export type FormElement = {
  type: ElementsType;

  construct: (id: string) => FormElementInstance;

  designerBtnElement: {
    icon: React.ElementType;
    label: string;
  };

  designerComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;
  formComponent: React.FC<{
    elementInstance: FormElementInstance;
    submitValue?: SubmitFunction;
    isInvalid?: boolean;
    defaultValue?: string;
  }>;
  propertiesComponent: React.FC<{
    elementInstance: FormElementInstance;
  }>;

  validate: (formElement: FormElementInstance, currentValue: string) => boolean;
};

export type FormElementInstance = {
  id: string;
  type: ElementsType;
  extraAttributes?: Record<string, any>;
};

type FormElementsType = {
  [key in ElementsType]: FormElement;
};
export const FormElements: FormElementsType = {
  TextField: TextFieldFormElement,
  TitleField: TitleFieldFormElement,
  SubTitleField: SubTitleFieldElement,
  ParagraphField: ParagraphFieldFormElement,
  SeparatorField: SeparatorFieldFormElement,
  SpacerField: SpacerFieldFormElement,
  // NumberField: NumberFieldFormElement,
  // TextAreaField: TextAreaFormElement,
  // DateField: DateFieldFormElement,
  // SelectField: SelectFieldFormElement,
  CheckboxField: CheckboxFieldFormElement,
};
