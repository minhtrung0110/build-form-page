// Libraries
import React from 'react';
import useDesigner from '@/hooks/useDesigner';
import { FormElements } from '@/types/FormElements';
import { Button } from '@/components/ui/button';
import { AiOutlineClose } from 'react-icons/ai';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const PropertiesFormSideBar: React.FC<Props> = (props) => {
  const { selectedElement, setSelectedElement } = useDesigner();
  if (!selectedElement) return null;

  const PropertiesForm = FormElements[selectedElement?.type].propertiesComponent;

  return (
    <div className={'flex flex-col p-2'}>
      <div className={'flex justify-between items-center'}>
        <p className={'text-sm text-foreground/70'}>
          Element Properties
        </p>
        <Button size={'icon'} variant={'ghost'}
                onClick={() => setSelectedElement(null)}>
          <AiOutlineClose />
        </Button>
      </div>
      <PropertiesForm elementInstance={selectedElement} />
    </div>
  );
};

export default PropertiesFormSideBar;