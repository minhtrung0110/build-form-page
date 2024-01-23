// Libraries
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormElementInstance } from '@/types/FormElements';
import { ParagraphFieldInstance } from '@/components/fields/ParagraphField/ParagraphField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerParagraphField: React.FC<Props> = (props) => {
  const element = props.elementInstance as ParagraphFieldInstance;
  const { text } = element.extraAttributes;

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Paragraph field</Label>
      <p className='truncate'>{text}</p>
    </div>
  );
};

export default DesignerParagraphField;