// Libraries
import React from 'react';
import { formatDistance } from 'date-fns';
import { LuView } from 'react-icons/lu';
import { FaWpforms } from 'react-icons/fa6';
import Link from 'next/link';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FaEdit } from 'react-icons/fa';

// Component
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Form } from '@prisma/client';

// Style

// Types


interface Props {
  form: Form;
}


const FormCard: React.FC<Props> = (props) => {
  const { form } = props;
  return (
    <Card>
      <CardHeader>
        <CardTitle className='flex items-center gap-2 justify-between'>
          <span className='truncate font-bold'>{form.name}</span>
          {form.published && <Badge>Published</Badge>}
          {!form.published && <Badge variant={'destructive'}>Draft</Badge>}
        </CardTitle>
        <CardDescription className='flex items-center justify-between text-muted-foreground text-sm'>
          {formatDistance(form.createdAt, new Date(), {
            addSuffix: true,
          })}
          {form.published && (
            <span className='flex items-center gap-2'>
              <LuView className='text-muted-foreground' />
              <span>{form.visits.toLocaleString()}</span>
              <FaWpforms className='text-muted-foreground' />
              <span>{form.submissions.toLocaleString()}</span>
            </span>
          )}
        </CardDescription>
      </CardHeader>
      <CardContent className='h-[20px] truncate text-sm text-muted-foreground'>
        {form.description || 'No description'}
      </CardContent>
      <CardFooter>
        {form.published && (
          <Button asChild className='w-full mt-2 text-md gap-4'>
            <Link href={`/forms/${form.id}`}>
              View submissions <BiRightArrowAlt />
            </Link>
          </Button>
        )}
        {!form.published && (
          <Button asChild variant={'secondary'} className='w-full mt-2 text-md gap-4'>
            <Link href={`/builder/${form.id}`}>
              Edit form <FaEdit />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default FormCard;