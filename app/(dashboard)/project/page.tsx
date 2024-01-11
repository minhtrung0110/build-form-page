'use client';
// Libraries
import React, { useState } from 'react';
import { closestCenter, DndContext, useDndContext } from '@dnd-kit/core';
import Droppable from '@/app/(dashboard)/project/commponents/Droppable';
import Draggable from '@/app/(dashboard)/project/commponents/Draggable';

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const ProjectPage: React.FC<Props> = props => {
  const [isDropped, setIsDropped] = useState(false);
  const draggableMarkup = <Draggable>Drag me</Draggable>;

  function handleDragEnd(event: any) {
    if (event.over && event.over.id === 'droppable') {
      setIsDropped(true);
    }
  }

  // testing
  const dndContext = useDndContext();
  console.log(dndContext);

  return (
    <div className={'flex w-full flex-row'}>
      <h2 className={'text-center'}>Project</h2>
      <div className={'container mx-auto px-4 bg-sky-300'}>
        <DndContext
          // onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
          //onDragCancel={handleDragCancel}
          //sensors={sensors}
          collisionDetection={closestCenter}
          //measuring={measuring}
        >
          {!isDropped ? draggableMarkup : null}
          <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
        </DndContext>
      </div>
    </div>
  );
};

export default ProjectPage;