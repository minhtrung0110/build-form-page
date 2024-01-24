// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { NumberFieldInstance } from '@/components/fields/NumberField/NumberField';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerNumberField: React.FC<Props> = (props) => {
  const element = props.elementInstance as NumberFieldInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Input readOnly disabled type='number' placeholder={placeHolder} />
      {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
    </div>
  );
};

export default DesignerNumberField;