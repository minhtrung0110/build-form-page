// Libraries
import React from 'react';
import { GetFormById } from '@/actions/form';
import StatsCard from '@/app/(dashboard)/components/StatsCard';
import FormLinkShare from '@/app/(dashboard)/forms/components/FormLinkShare';
import VisitBtn from '@/app/(dashboard)/forms/components/VisitBtn';
import { LuView } from 'react-icons/lu';
import { FaWpforms } from 'react-icons/fa6';
import { HiCursorClick } from 'react-icons/hi';
import { TbArrowBounce } from 'react-icons/tb';
import SubmissionsTable from '@/app/(dashboard)/forms/components/SubmissionsTable';

// Component

// Style

// Types


interface Props {
  params: { id: string; };
}

const FormDetailPage: React.FC<Props> = async ({ params }) => {
  const { id } = params;
  const form = await GetFormById(Number(id));
  if (!form) {
    throw new Error('form not found');
  }

  const { visits, submissions } = form;

  let submissionRate = 0;

  if (visits > 0) {
    submissionRate = (submissions / visits) * 100;
  }

  const bounceRate = 100 - submissionRate;

  return (
    <>
      <div className='py-10 border-b border-muted'>
        <div className='flex justify-between container'>
          <h1 className='text-4xl font-bold truncate'>{form.name}</h1>
          <VisitBtn shareUrl={form.shareURL} />
        </div>
      </div>
      <div className='py-4 border-b border-muted'>
        <div className='container flex gap-2 items-center justify-between'>
          <FormLinkShare shareUrl={form.shareURL} />
        </div>
      </div>
      <div className='w-full pt-8 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container'>
        <StatsCard
          title='Total visits'
          icon={<LuView className='text-blue-600' />}
          helperText='All time form visits'
          value={visits.toLocaleString() || ''}
          loading={false}
          className='shadow-md shadow-blue-600'
        />

        <StatsCard
          title='Total submissions'
          icon={<FaWpforms className='text-yellow-600' />}
          helperText='All time form submissions'
          value={submissions.toLocaleString() || ''}
          loading={false}
          className='shadow-md shadow-yellow-600'
        />

        <StatsCard
          title='Submission rate'
          icon={<HiCursorClick className='text-green-600' />}
          helperText='Visits that result in form submission'
          value={submissionRate.toLocaleString() + '%' || ''}
          loading={false}
          className='shadow-md shadow-green-600'
        />

        <StatsCard
          title='Bounce rate'
          icon={<TbArrowBounce className='text-red-600' />}
          helperText='Visits that leaves without interacting'
          value={bounceRate.toLocaleString() + '%' || ''}
          loading={false}
          className='shadow-md shadow-red-600'
        />
      </div>

      <div className='container pt-10'>
        <SubmissionsTable id={form.id} />
      </div>
    </>
  );
};

export default FormDetailPage;