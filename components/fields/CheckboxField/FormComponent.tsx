// Libraries
import React, { useEffect, useState } from 'react';
import { FormElementInstance, SubmitFunction } from '@/types/FormElements';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { CheckboxFieldFormElement, CustomInstanceCheckboxField } from '@/components/fields/CheckboxField/index';
import { Checkbox } from '@/components/ui/checkbox';

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
  const element = elementInstance as CustomInstanceCheckboxField;

  const [value, setValue] = useState<boolean>(defaultValue === 'true' ? true : false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, required, placeHolder, helperText } = element.extraAttributes;
  const id = `checkbox-${element.id}`;
  return (
    <div className='flex items-top space-x-2'>
      <Checkbox
        id={id}
        checked={value}
        className={cn(error && 'border-red-500')}
        onCheckedChange={(checked) => {
          let value = false;
          if (checked === true) value = true;

          setValue(value);
          if (!submitValue) return;
          const stringValue = value ? 'true' : 'false';
          const valid = CheckboxFieldFormElement.validate(element, stringValue);
          setError(!valid);
          submitValue(element.id, stringValue);
        }}
      />
      <div className='grid gap-1.5 leading-none'>
        <Label htmlFor={id} className={cn(error && 'text-red-500')}>
          {label}
          {required && '*'}
        </Label>
        {helperText && (
          <p className={cn('text-muted-foreground text-[0.8rem]', error && 'text-red-500')}>{helperText}</p>
        )}
      </div>
    </div>
  );
};

export default FormComponent;