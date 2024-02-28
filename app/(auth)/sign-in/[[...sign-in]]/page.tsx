// Libraries
import React from 'react';
import { SignIn } from '@clerk/nextjs';

// Component

// Style

// Types


interface Props {
  // Define your component's props here
}

const SignInPage: React.FC<Props> = (props) => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default SignInPage;