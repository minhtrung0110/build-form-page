'use client';
// Libraries
import React from 'react';
import DesignerSidebar from '@/app/(dashboard)/builder/components/DesignerSidebar';
import { DragEndEvent, useDndMonitor, useDroppable } from '@dnd-kit/core';
import { cn } from '@/lib/utils';
import { ElementsType, FormElements } from '@/components/FormElements';
import { idGenerator } from '@/lib/idGenerator';
import useDesigner from '@/hooks/useDesigner';
import DesignerElementWrapper from '@/app/(dashboard)/builder/components/DesignerElementWrapper ';

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const Designer: React.FC<Props> = props => {
  const { elements, addElement, selectedElement, setSelectedElement, removeElement } =
    useDesigner();
  const droppable = useDroppable({
    id: 'designer-drop-area',
    data: {
      isDesignerDropArea: true,
    },
  });
  useDndMonitor({
    onDragEnd(event: DragEndEvent) {
      const { active, over } = event;
      if (!active || !over) return;
      const isDesignerBtnElement = active.data?.current?.isDesignerBtnElement;
      if (isDesignerBtnElement) {
        const type = active?.data?.current?.type;
        const newElement = FormElements[type as ElementsType].construct(idGenerator());

        console.log('New element:', newElement);
        addElement(elements.length, newElement);
      }
    },
  });
  return (
    <div className="flex w-full h-full">
      <div
        className="p-4 w-full"
        onClick={() => {
          if (selectedElement) setSelectedElement(null);
        }}
      >
        <div
          ref={droppable.setNodeRef}
          className={cn(
            'bg-background max-w-[920px] h-full m-auto rounded-xl flex flex-col flex-grow items-center justify-start flex-1 overflow-y-auto',
            droppable.isOver && 'ring-4 ring-primary ring-inset',
          )}
        >
          {!droppable.isOver && elements.length === 0 && (
            <p className="text-3xl text-muted-foreground flex flex-grow items-center font-bold">
              Drop here
            </p>
          )}
          {droppable.isOver && (
            <div className="p-4 w-full">
              <div className="h-[120px] rounded-md bg-primary/20"></div>
            </div>
          )}
          {elements.length > 0 && (
            <div className="flex flex-col text-background w-full gap-2 p-4">
              {elements.map(ele => (
                <DesignerElementWrapper key={ele.id} element={ele} />
              ))}
            </div>
          )}
        </div>
      </div>
      <DesignerSidebar />
    </div>
  );
};

export default Designer;