// Libraries
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormElementInstance } from '@/types/FormElements';
import { SubTitleCustomInstance } from '@/components/fields/SubTitleField/SubTitleField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerSubTitleField: React.FC<Props> = (props) => {
  const element = props.elementInstance as SubTitleCustomInstance;
  const { title } = element.extraAttributes;

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Sub Title field</Label>
      <p className='text-xl'>{title}</p>
    </div>
  );
};

export default DesignerSubTitleField;