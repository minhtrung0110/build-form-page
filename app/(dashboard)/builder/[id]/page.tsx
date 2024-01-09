// Libraries
import React from 'react';
import { GetFormById } from '@/actions/form';
import FormBuilder from '@/app/(dashboard)/builder/components/FormBuilder';

// Component

// Style

// Types


interface Props {
  params: { id: string; };
}

const BuilderPage: React.FC<Props> = async ({ params }) => {
  const { id } = params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error('form not found');
  }
  return <FormBuilder form={form} />;
};

export default BuilderPage;