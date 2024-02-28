// Libraries
import React from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { TextAreaFieldInstance } from '@/components/fields/TextAreaField/TextAreaField';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

const DesignerTextAreaField: React.FC<Props> = (props) => {
  const element = props.elementInstance as TextAreaFieldInstance;
  const { label, required, placeHolder, helperText, rows } = element.extraAttributes;
  return (
    <div className='flex flex-col gap-2 w-full'>
      <Label>
        {label}
        {required && '*'}
      </Label>
      <Textarea readOnly disabled placeholder={placeHolder} />
      {helperText && <p className='text-muted-foreground text-[0.8rem]'>{helperText}</p>}
    </div>
  );
};

export default DesignerTextAreaField;