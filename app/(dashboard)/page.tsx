import { GetFormStats } from '@/actions/form';
import StatsCardGroup from '@/app/(dashboard)/components/StatsCardGroup';
import { Suspense } from 'react';
import { Separator } from '@/components/ui/separator';
import CreateFormButton from '@/app/(dashboard)/components/CreateFormButton';
import { Skeleton } from '@/components/ui/skeleton';
import FormCardGroup from '@/app/(dashboard)/components/FormCardGroup';

export default function Home() {
  return (
    <div className="container pt-4">
      <Suspense fallback={<StatsCardGroup loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className={'my-6'} />
      <h2 className={'text-4xl font-bold col-span-2'}>Your forms</h2>
      <Separator className={'my-6'} />
      <div className="grid gric-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CreateFormButton />
        <Suspense
          fallback={[1, 2, 3, 4].map(el => (
            <FormCardSkeleton key={el} />
          ))}
        >
          <FormCardGroup />
        </Suspense>
      </div>
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCardGroup loading={false} data={stats} />;
}

function FormCardSkeleton() {
  return <Skeleton className="border-2 border-primary-/20 h-[190px] w-full" />;
}
