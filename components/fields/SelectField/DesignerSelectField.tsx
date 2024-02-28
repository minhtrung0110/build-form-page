// Libraries
import React from 'react';
import { SelectFieldInstance } from '@/components/fields/SelectField/SelectField';
import { FormElementInstance } from '@/types/FormElements';
import { Label } from '@/components/ui/label';
import { Select, SelectTrigger, SelectValue } from '@/components/ui/select';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerSelectField: React.FC<Props> = (props) => {
  const element = props.elementInstance as SelectFieldInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Select>
        <SelectTrigger className='w-full'>
          <SelectValue placeholder={placeHolder} />
        </SelectTrigger>
      </Select>
      {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
    </div>
  );
};

export default DesignerSelectField;