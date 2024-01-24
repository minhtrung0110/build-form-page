// Libraries
import React from 'react';

// Component
import { Separator } from '@/components/ui/separator';
import SidebarBtnElement from '@/app/(dashboard)/builder/components/SidebarBtnElement';

// Style
// Types
import { FormElements } from '@/types/FormElements';


interface Props {
  // Define your component's props here
}

const FormElementSideBar: React.FC<Props> = (props) => {
  return (
    <div>
      <p className='text-sm text-foreground/70'>Drag and drop elements</p>
      <Separator className='my-2' />
      <div className='grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center'>
        <p className='text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start'>Layout elements</p>
        <SidebarBtnElement formElement={FormElements.TitleField} />
        <SidebarBtnElement formElement={FormElements.SubTitleField} />
        <SidebarBtnElement formElement={FormElements.ParagraphField} />
        <SidebarBtnElement formElement={FormElements.SeparatorField} />
        <SidebarBtnElement formElement={FormElements.SpacerField} />

        <p className='text-sm text-muted-foreground col-span-1 md:col-span-2 my-2 place-self-start'>Form elements</p>
        <SidebarBtnElement formElement={FormElements.TextField} />
        <SidebarBtnElement formElement={FormElements.NumberField} />
        <SidebarBtnElement formElement={FormElements.TextAreaField} />
        <SidebarBtnElement formElement={FormElements.DateField} />
        {/*<SidebarBtnElement formElement={FormElements.SelectField} />*/}
        <SidebarBtnElement formElement={FormElements.CheckboxField} />
      </div>
    </div>
  );
};

export default FormElementSideBar;