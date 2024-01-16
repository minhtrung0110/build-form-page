'use client';

// Libraries
import React, { useEffect, useState } from 'react';
import { Form } from '@prisma/client';
import PreviewDialogBtn from '@/app/(dashboard)/builder/components/PreviewDialogBtn';
import SaveFormBtn from '@/app/(dashboard)/builder/components/SaveFormBtn';
import PublishFormBtn from '@/app/(dashboard)/builder/components/PublishFormBtn';
import Designer from '@/app/(dashboard)/builder/components/Designer';
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors } from '@dnd-kit/core';
import DragOverlayWrapper from '@/app/(dashboard)/builder/components/DragOverlayWrapper';
import useDesigner from '@/hooks/useDesigner';
import { ImSpinner2 } from 'react-icons/im';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { toast } from '@/components/ui/use-toast';
import { Input } from '@/components/ui/input';

// Component

// Style

// Types

interface Props {
  form: Form;
}

const FormBuilder: React.FC<Props> = props => {
  const { form } = props;
  const { setElements, setSelectedElement } = useDesigner();
  const [isReady, setIsReady] = useState(false);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });

  const sensors = useSensors(mouseSensor, touchSensor);

  useEffect(() => {
    if (isReady) return;
    const elements = JSON.parse(form.content);
    setElements(elements);
    setSelectedElement(null);
    const readyTimeout = setTimeout(() => setIsReady(true), 500);
    return () => clearTimeout(readyTimeout);
  }, [form, setElements, isReady, setSelectedElement]);

  if (!isReady) {
    <div className={'flex flex-col items-center justify-center w-full h-full'}>
      <ImSpinner2 className={'animate-spin h-12 w-12'} />
    </div>;
  }
  const shareUrl = `${window.location.origin}/submit/${form.shareURL}`;
  if (form.published) {
    return (
      <>
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={1000}
        >
          <div className="flex flex-col items-center justify-center h-full w-full">
            <div className="max-w-md">
              <h1 className="text-center text-4xl font-bold text-primary border-b pb-2 mb-10">
                🎊🎊 Form Published 🎊🎊
              </h1>
              <h2 className="text-2xl">Share this form</h2>
              <h3 className="text-xl text-muted-foreground border-b pb-10">
                Anyone with the link can view and submit the form
              </h3>
              <div className="my-4 flex flex-col gap-2 items-center w-full border-b pb-4">
                <Input className="w-full" readOnly value={shareUrl} />
                <Button
                  className="mt-2 w-full"
                  onClick={() => {
                    navigator.clipboard.writeText(shareUrl);
                    toast({
                      title: 'Copied!',
                      description: 'Link copied to clipboard',
                    });
                  }}
                >
                  Copy link
                </Button>
              </div>
              <div className="flex justify-between">
                <Button variant={'link'} asChild>
                  <Link href={'/'} className="gap-2">
                    <BsArrowLeft />
                    Go back home
                  </Link>
                </Button>
                <Button variant={'link'} asChild>
                  <Link href={`/forms/${form.id}`} className="gap-2">
                    Form details
                    <BsArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </Confetti>
      </>
    );
  }
  return (
    <DndContext sensors={sensors}>
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
        {/* WorkSpace */}
        <div className="flex w-full flex-grow items-center justify-center relative overflow-y-auto h-[200px] bg-accent bg-[url(/graphpattern.svg)] dark:bg-[url(/graphpattern.svg)]">
          <Designer />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
};

export default FormBuilder;