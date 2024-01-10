'use client';
// Libraries
import React, { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
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

  return (
    <div className={'flex w-full'}>
      <h2 className={'text-center'}>Project</h2>
      <div>
        <DndContext onDragEnd={handleDragEnd}>
          {!isDropped ? draggableMarkup : null}
          <Droppable>{isDropped ? draggableMarkup : 'Drop here'}</Droppable>
        </DndContext>
      </div>
    </div>
  );
};

export default ProjectPage;