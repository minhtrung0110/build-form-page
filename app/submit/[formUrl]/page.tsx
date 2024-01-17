// Libraries
import React from 'react';
import { GetFormContentByUrl } from '@/actions/form';
import FormSubmitComponent from '@/app/submit/components/FormSubmitComponent';

// Component

// Style

// Types


interface Props {
  params: { formUrl: string };
}

const SubmitPage: React.FC<Props> = async (props) => {
  const { params } = props;

  const form = await GetFormContentByUrl(params.formUrl);
  if (!form) {
    throw new Error('Cannot get data of form!');
  }

  const formContent = JSON.parse(form.content);

  return (
    <FormSubmitComponent formUrl={params.formUrl} content={formContent} />
  );
};

export default SubmitPage;