import { GetFormStats } from '@/actions/form';
import StatsCardGroup from '@/components/StatsCardGroup';
import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import CreateFormButton from '@/components/CreateFormButton';

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCardGroup loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className={'my-6'} />
      <h2 className={'text-4xl font-bold col-span-2'}>Your forms</h2>
      <Separator className={'my-6'} />
      <CreateFormButton />
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCardGroup loading={false} data={stats} />;
}
