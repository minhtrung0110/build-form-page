// Libraries
import React from 'react';

// Component

// Style

// Types


interface Props {
  [key: string]: any;
}

const Layout: React.FC<Props> = (props) => {
  const { children } = props;
  return (
    <main className='flex w-full flex-grow'>{children}</main>
  );
};

export default Layout;