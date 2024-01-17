// Libraries
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { CustomInstanceCheckboxField } from '@/components/fields/CheckboxField/index';
import { FormElementInstance } from '@/types/FormElements';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerComponent: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const element = elementInstance as CustomInstanceCheckboxField;
  const { label, required, helperText } = element.extraAttributes;
  const id = `checkbox-${element.id}`;
  return (
    <div className='flex items-top space-x-2'>
      <Checkbox id={id} />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={id}>
          {label}
          {required && '*'}
        </Label>
        {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
      </div>
    </div>
  );
};

export default DesignerComponent;