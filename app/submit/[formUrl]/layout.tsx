// Libraries
import React from 'react';
import Logo from '@/components/Logo';
import ThemeSwitcher from '@/components/ThemeSwitcher';

// Component

// Style

// Types


interface Props {
  children: React.ReactNode;
}

const SubmitLayout: React.FC<Props> = (props) => {
  const children = props.children;
  return (
    <div className='flex flex-col min-h-screen min-w-full bg-background max-h-screen h-screen'>
      <nav className='flex justify-between items-center border-b border-border h-[60px] px-4 py-2'>
        <Logo title={''} />
        <ThemeSwitcher />
      </nav>
      <main className='flex w-full flex-grow'>{children}</main>


    </div>
  );
};

export default SubmitLayout;