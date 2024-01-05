// Libraries
import React from 'react';
import {SignedIn} from "@clerk/nextjs";

// Component

// Style

// Types


interface Props {
    // Define your component's props here
}

const SignInPage: React.FC<Props> = (props) => {
    return (
        <div>
            <SignedIn/>
        </div>
    );
}

export default SignInPage;