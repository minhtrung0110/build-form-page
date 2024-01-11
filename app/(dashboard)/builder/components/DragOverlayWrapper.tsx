// Libraries
import React, { useState } from 'react';
import { Active, DragCancelEvent, DragEndEvent, DragOverlay, DragStartEvent, useDndMonitor } from '@dnd-kit/core';
import { ElementsType, FormElements } from '@/components/FormElements';
import { SidebarBtnElementDragOverlay } from '@/app/(dashboard)/builder/components/SidebarBtnElement';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const DragOverlayWrapper: React.FC<Props> = (props) => {
  const [draggedItem, setDraggedItem] = useState<Active | null>(null);

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

  let node = (
    <div className='flex bg-accent border rounded-md h-[120px] w-full py-2 px-4 opacity-80 pointer pointer-events-none'>
      {/*<DesignerElementComponent elementInstance={element} />*/}
      Drag OverLay
    </div>
  );
  const isSidebarBtnElement = draggedItem?.data?.current?.isDesignerBtnElement;
  if (isSidebarBtnElement) {
    const type = draggedItem?.data?.current?.type as ElementsType;
    node = <SidebarBtnElementDragOverlay formElement={FormElements[type]} />;
  }
  return (
    <DragOverlay>{node}</DragOverlay>
  );
};

export default DragOverlayWrapper;