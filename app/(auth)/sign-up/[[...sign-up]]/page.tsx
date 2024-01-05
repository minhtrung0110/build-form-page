// Libraries
// @ts-ignore
import React from 'react';
import {SignUp} from "@clerk/nextjs";

// Component

// Style

// Types


interface Props {
    // Define your component's props here
}

const SignUpPage: React.FC<Props> = (props) => {
    return (
        <div>
          <SignUp/>
        </div>
    );
}

export default SignUpPage;