// Libraries
import React from 'react';
import SidebarBtnElement from '@/app/(dashboard)/builder/components/SidebarBtnElement';
import { FormElements } from '@/types/FormElements';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const FormElementSideBar: React.FC<Props> = (props) => {
  return (
    <div>
      <SidebarBtnElement formElement={FormElements.TextField} />

    </div>
  );
};

export default FormElementSideBar;