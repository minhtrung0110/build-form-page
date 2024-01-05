// Libraries
import React from 'react';
import {GetFormStats} from "@/actions/form";

// Component

// Style

// Types


interface Props {
   loading: boolean;
   data:Awaited<ReturnType<typeof GetFormStats>>
}

const StatsCard: React.FC<Props> = (props) => {
    return (
        <div>
            
        </div>
    );
}

export default StatsCard;