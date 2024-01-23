// Libraries
import React from 'react';
import { Label } from '@/components/ui/label';
import { FormElementInstance } from '@/types/FormElements';
import { CustomInstance } from '@/components/fields/TextField/TextField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerTitleField: React.FC<Props> = (props) => {
  const element = props.elementInstance as CustomInstance;
  const { title } = element.extraAttributes;

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className='text-muted-foreground'>Title field</Label>
      <p className='text-xl'>{title}</p>
    </div>
  );
};

export default DesignerTitleField;