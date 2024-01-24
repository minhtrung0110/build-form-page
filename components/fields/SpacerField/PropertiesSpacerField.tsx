// Libraries
import React, { useEffect } from 'react';
import { propertiesSchema, SpacerFieldInstance } from '@/components/fields/SpacerField/SpacerField';
import useDesigner from '@/hooks/useDesigner';
import { FormElementInstance } from '@/types/FormElements';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Slider } from '@/components/ui/slider';
// Component

// Style

// Types


interface Props {
  elementInstance: FormElementInstance;
}

type propertiesFormSchemaType = z.infer<typeof propertiesSchema>;
const PropertiesSpacerField: React.FC<Props> = (props) => {
  const element = props.elementInstance as SpacerFieldInstance;
  const { updateElement } = useDesigner();
  const form = useForm<propertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: 'onBlur',
    defaultValues: {
      height: element.extraAttributes.height,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: propertiesFormSchemaType) {
    const { height } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        height,
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
          name='height'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (px): {form.watch('height')}</FormLabel>
              <FormControl className='pt-2'>
                <Slider
                  defaultValue={[field.value]}
                  min={5}
                  max={200}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value[0]);
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

export default PropertiesSpacerField;