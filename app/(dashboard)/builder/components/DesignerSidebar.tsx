// Libraries
import React from 'react';
import useDesigner from '@/hooks/useDesigner';
import FormElementSideBar from '@/app/(dashboard)/builder/components/FormElementSideBar';
import PropertiesFormSideBar from '@/app/(dashboard)/builder/components/PropertiesFormSideBar';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const DesignerSidebar: React.FC<Props> = (props) => {
  const { selectedElement } = useDesigner();
  return (
    <aside
      className='w-[400px] max-w-[400px] flex flex-col flex-grow gap-2 border-l-2 border-muted p-4 bg-background overflow-y-auto h-full'>
      {
        !selectedElement && <FormElementSideBar />
      }
      {
        selectedElement && <PropertiesFormSideBar />
      }
    </aside>

  );
};

export default DesignerSidebar;