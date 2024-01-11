'use client';

// Libraries
import React from 'react';
import { Form } from '@prisma/client';
import PreviewDialogBtn from '@/app/(dashboard)/builder/components/PreviewDialogBtn';
import SaveFormBtn from '@/app/(dashboard)/builder/components/SaveFormBtn';
import PublishFormBtn from '@/app/(dashboard)/builder/components/PublishFormBtn';
import Designer from '@/app/(dashboard)/builder/components/Designer';
import { DndContext } from '@dnd-kit/core';
import DragOverlayWrapper from '@/app/(dashboard)/builder/components/DragOverlayWrapper';

// Component

// Style

// Types

interface Props {
  form: Form;
}

const FormBuilder: React.FC<Props> = props => {
  const { form } = props;
  return (
    <DndContext>
      <main className="flex flex-col w-full">
        <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.name}
          </h2>
          <div className="flex items-center gap-2">
            <PreviewDialogBtn />
            {!form.published && (
              <>
                <SaveFormBtn id={form.id} />
                <PublishFormBtn id={form.id} />
              </>
            )}
          </div>
        </nav>
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/graphpattern.svg)] dark:bg-[url(/graphpattern.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;