// Libraries
import React from 'react';

// Component

// Style

// Types


interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props) => {
  const children = props.children;
  return (
    <div className='flex w-full flex-grow mx-auto'>{children}</div>
  );
};

export default Layout;