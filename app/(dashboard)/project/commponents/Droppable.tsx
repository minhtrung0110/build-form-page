// Libraries
import React from 'react';
import { useDroppable } from '@dnd-kit/core';

// Component

// Style

// Types


interface Props {
  children: any;
}

const Droppable: React.FC<Props> = (props) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });
  const style = {
    color: isOver ? 'green' : undefined,
  };


  return (
    <div ref={setNodeRef} style={style}>
      {props.children}
    </div>
  );
};

export default Droppable;