// Libraries
import React from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { FormElementInstance } from '@/types/FormElements';
import { CustomInstance } from '@/components/fields/TextField/TextField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerComponent: React.FC<Props> = (props) => {
  const element = props.elementInstance as CustomInstance;
  const { label, required, placeholder, helperText } = element.extraAttributes;

  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled placeholder={placeholder} />
      {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
    </div>
  );
};

export default DesignerComponent;