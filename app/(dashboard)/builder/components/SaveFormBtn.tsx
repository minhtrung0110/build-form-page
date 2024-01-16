// Libraries
import React, { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { HiSaveAs } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa6';
import useDesigner from '@/hooks/useDesigner';
import { toast } from '@/components/ui/use-toast';
import { UpdateFormContent } from '@/actions/form';

// Component

// Style

// Types


interface Props {
  id: number;
}

const SaveFormBtn: React.FC<Props> = (props) => {
  const { id } = props;
  const { elements } = useDesigner();
  const [loading, startTransition] = useTransition();

  const updateFormContent = async () => {
    try {
      const jsonElement = JSON.stringify(elements);
      await UpdateFormContent(id, jsonElement);
      toast({
        title: 'Success',
        description: 'Update Form Content Success',
      });
    } catch (err) {
      toast({
        title: 'Error',
        description: 'Cannot update form content',
        variant: 'destructive',
      });
    }
  };
  return (
    <Button
      variant={'outline'}
      className='gap-2'
      disabled={loading}
      onClick={() => {
        startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className='h-4 w-4' />
      Save
      {loading && <FaSpinner className='animate-spin' />}
    </Button>
  );
};

export default SaveFormBtn;