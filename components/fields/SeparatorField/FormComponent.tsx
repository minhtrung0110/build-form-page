// Libraries
import React, { useEffect, useState } from 'react';
import { CustomInstance, TextFieldFormElement } from '@/components/fields/TextField/TextField';
import { FormElementInstance, SubmitFunction } from '@/types/FormElements';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Input } from '@/components/ui/input';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
}

const FormComponent: React.FC<Props> = (props) => {
  const { elementInstance, isInvalid, submitValue, defaultValue } = props;
  const element = elementInstance as CustomInstance;

  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, required, placeHolder, helperText } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Input
        className={cn(error && 'border-red-500')}
        placeholder={placeHolder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (!submitValue) return;
          const valid = TextFieldFormElement.validate(element, e.target.value);
          setError(!valid);
          if (!valid) return;
          submitValue(element.id, e.target.value);
        }}
        value={value}
      />
      {helperText && <p className={cn('text-muted-foreground text-[0.8rem]', error && 'text-red-500')}>{helperText}</p>}
    </div>
  );
};

export default FormComponent;