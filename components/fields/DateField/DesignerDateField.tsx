// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { DateFieldInstance } from '@/components/fields/DateField/DateField';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CalendarIcon } from 'lucide-react';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerDateField: React.FC<Props> = (props) => {
  const element = props.elementInstance as DateFieldInstance;
  const { label, required, placeHolder, helperText } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Button variant={'outline'} className='w-full justify-start text-left font-normal'>
        <CalendarIcon className='mr-2 h-4 w-4' />
        <span>Pick a date</span>
      </Button>
      {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
    </div>
  );
};

export default DesignerDateField;