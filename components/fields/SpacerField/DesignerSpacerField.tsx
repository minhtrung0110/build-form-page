// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { SpacerFieldInstance } from '@/components/fields/SpacerField/SpacerField';
import { Label } from '@/components/ui/label';
import { LuSeparatorHorizontal } from 'react-icons/lu';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerSpacerField: React.FC<Props> = (props) => {
  const element = props.elementInstance as SpacerFieldInstance;
  const { height } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full items-center'>
      <Label className='text-muted-foreground'>Spacer field: {height}px</Label>
      <LuSeparatorHorizontal className='h-8 w-8' />
    </div>
  );
};

export default DesignerSpacerField;