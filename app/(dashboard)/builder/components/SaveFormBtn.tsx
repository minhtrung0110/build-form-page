// Libraries
import React, { useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { HiSaveAs } from 'react-icons/hi';
import { FaSpinner } from 'react-icons/fa6';

// Component

// Style

// Types


interface Props {
  id: number;
}

const SaveFormBtn: React.FC<Props> = (props) => {
  const [loading, setLoading] = useTransition();
  return (
    <Button
      variant={'outline'}
      className='gap-2'
      disabled={loading}
      onClick={() => {
        //startTransition(updateFormContent);
      }}
    >
      <HiSaveAs className='h-4 w-4' />
      Save
      {loading && <FaSpinner className='animate-spin' />}
    </Button>
  );
};

export default SaveFormBtn;