'use client';
// Libraries
import React from 'react';
import DesignerSidebar from '@/app/(dashboard)/builder/components/DesignerSidebar';

// Component

// Style

// Types

interface Props {
  // Define your component's props here
}

const Designer: React.FC<Props> = props => {
  return (
    <div className="flex w-full h-full">
      <DesignerSidebar />
    </div>
  );
};

export default Designer;