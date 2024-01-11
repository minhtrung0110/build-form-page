// Libraries
import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Card } from '@/components/ui/card';

// Component

// Style

// Types


interface Props {
  children: any;
}

const Draggable: React.FC<Props> = (props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable',
  });
  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;


  return (
    <Card ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {props.children}
    </Card>
  );
};

export default Draggable;