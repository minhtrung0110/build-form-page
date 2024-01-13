'use client';
// Libraries
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NAME_PAGE_DEFAULT, NAME_PAGES } from '@/constants/constant';

// Component

// Style

// Types

interface Props {
  title: string;
}

const Logo: React.FC<Props> = props => {
  const { title } = props;
  const pathname = usePathname();
  const getNamePage = (path: String) => {
    return NAME_PAGES.find(item => item.url === pathname)?.name || NAME_PAGE_DEFAULT;
  };
  return (
    <Link
      href={'/'}
      className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
    >
      {getNamePage(pathname)}
    </Link>
  );
};

export default Logo;