// Libraries
import React, { useEffect, useState } from 'react';
import { FormElementInstance, SubmitFunction } from '@/types/FormElements';
import { TextAreaFieldInstance, TextAreaFormElement } from '@/components/fields/TextAreaField/TextAreaField';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';
import { Textarea } from '@/components/ui/textarea';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
  submitValue?: SubmitFunction;
  isInvalid?: boolean;
  defaultValue?: string;
}

const FormTextAreaField: React.FC<Props> = (props) => {
  const { elementInstance, submitValue, isInvalid, defaultValue } = props;
  const element = elementInstance as TextAreaFieldInstance;

  const [value, setValue] = useState(defaultValue || '');
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(isInvalid === true);
  }, [isInvalid]);

  const { label, required, placeHolder, helperText, rows } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label className={cn(error && 'text-red-500')}>
        {label}
        {required && '*'}
      </Label>
      <Textarea
        className={cn(error && 'border-red-500')}
        rows={rows}
        placeholder={placeHolder}
        onChange={(e) => setValue(e.target.value)}
        onBlur={(e) => {
          if (!submitValue) return;
          const valid = TextAreaFormElement.validate(element, e.target.value);
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

export default FormTextAreaField;