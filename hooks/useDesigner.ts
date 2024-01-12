'use client';

import { useContext } from 'react';
import { DesignerContext } from '@/components/context/DesignerContext';

function useDesigner() {
  const context = useContext(DesignerContext);

  if (!context) {
    throw new Error('useDesigner must be used within a DesignerContext');
  }
  //console.log('Global design context: ', context);
  return context;
}

export default useDesigner;
