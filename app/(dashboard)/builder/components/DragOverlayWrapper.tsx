// Libraries
import React, { useState } from 'react';
import { Active, DragCancelEvent, DragEndEvent, DragOverlay, DragStartEvent, useDndMonitor } from '@dnd-kit/core';
import { ElementsType, FormElements } from '@/components/FormElements';
import { SidebarBtnElementDragOverlay } from '@/app/(dashboard)/builder/components/SidebarBtnElement';
import useDesigner from '@/hooks/useDesigner';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const DragOverlayWrapper: React.FC<Props> = (props) => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);
  const { elements } = useDesigner();
  useDndMonitor({
    onDragStart(event: DragStartEvent) {
      setDraggedItem(event.active);
      // console.log('DRAG ITEM:', event);
    },
    onDragCancel(event: DragCancelEvent) {
      setDraggedItem(null);
    },
    onDragEnd(event: DragEndEvent) {
      setDraggedItem(null);
    },
  });
  console.log('DRAG ITEM:', draggedItem);
  if (!draggedItem) return null;

  let node = <div>No drag overlay</div>;
  const isSidebarBtnElement = draggedItem.data?.current?.isDesignerBtnElement;

  if (isSidebarBtnElement) {
    const type = draggedItem.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }

  const isDesignerElement = draggedItem.data?.current?.isDesignerElement;
  if (isDesignerElement) {
    const elementId = draggedItem.data?.current?.elementId;
    const element = elements.find((el) => el.id === elementId);
    if (!element) node = <div>Element not found!</div>;
    else {
      const DesignerElementComponent = FormElements[element.type].designerComponent;

      node = (
        <div
          className='flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-80 pointer pointer-events-none'>
          <DesignerElementComponent elementInstance={element} />
        </div>
      );
    }
  }
  return (
    <DragOverlay>{node}</DragOverlay>
  );
};

export default DragOverlayWrapper;