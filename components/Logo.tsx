// Libraries
import React from 'react';
import Link from "next/link";

// Component

// Style

// Types


interface Props {
    // Define your component's props here
}

const Logo: React.FC<Props> = (props) => {
    return (
        <Link
            href={"/"}
            className="font-bold text-3xl bg-gradient-to-r from-indigo-400 to-cyan-400 text-transparent bg-clip-text hover:cursor-pointer"
        >
            Build Form Page
        </Link>
    );
}

export default Logo;