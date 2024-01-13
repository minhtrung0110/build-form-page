// Libraries
import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Card } from '@/components/ui/card';

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
    <Card className={'h-2 w-32'}>
      <div ref={setNodeRef} style={style}>
        {props.children}
      </div>
    </Card>

  );
};

export default Droppable;