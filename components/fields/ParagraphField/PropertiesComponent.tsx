// Libraries
import React, { useEffect } from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useDesigner from '@/hooks/useDesigner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ParagraphFieldInstance, propertiesSchema } from '@/components/fields/ParagraphField/ParagraphField';
import 'react-quill/dist/quill.snow.css';
import TextEditor from '@/components/molecules/TextEditor';
// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>
const PropertiesParagraphField: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const element = elementInstance as ParagraphFieldInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      text: element.extraAttributes.text,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { text } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        text,
      },
    });
  }


  return (
    <Form {...form}>
      <form
        onBlur={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className='space-y-3'
      >
        <FormField
          control={form.control}
          name='text'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <TextEditor {...field} />
                {/*<ReactQuill theme='snow' {...field}*/}
                {/*            onKeyDown={(e) => {*/}
                {/*              if (e.key === 'Enter') e.currentTarget.blur();*/}
                {/*            }}*/}
                {/*/>*/}
                {/*<Textarea*/}
                {/*  rows={5}*/}

                {/*  onKeyDown={(e) => {*/}
                {/*    if (e.key === 'Enter') e.currentTarget.blur();*/}
                {/*  }}*/}
                {/*/>*/}
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export default PropertiesParagraphField;