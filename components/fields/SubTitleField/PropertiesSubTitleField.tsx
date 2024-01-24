// Libraries
import React, { useEffect } from 'react';
import { FormElementInstance } from '@/types/FormElements';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import useDesigner from '@/hooks/useDesigner';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { propertiesSchema, SubTitleCustomInstance } from '@/components/fields/SubTitleField/SubTitleField';

// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>
const PropertiesSubTitleField: React.FC<Props> = (props) => {
  const { elementInstance } = props;
  const { updateElement } = useDesigner();
  const element = elementInstance as SubTitleCustomInstance;
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      title: element.extraAttributes.title,
    },
  });
  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { title } = values;
    updateElement(element.id, {
      ...element, extraAttributes: {
        title,
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
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') e.currentTarget.blur();
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

      </form>
    </Form>
  );
};

export default PropertiesSubTitleField;

