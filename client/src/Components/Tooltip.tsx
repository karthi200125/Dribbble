import React from 'react';
import { Tooltip } from 'react-tooltip';

interface TooltipProps {
    children: React.ReactNode;
    msg: string;
    id: string;
    position?: 'top' | 'right' | 'bottom' | 'left';
}

const Toolt = ({ children, position = 'top', msg , id }: TooltipProps) => {
    return (
        <>
            <Tooltip id={id} />
            <div data-tooltip-id="my-tooltip" data-tooltip-content={msg} data-tooltip-place={position} >
                {children}
            </div>
        </>
    );
}

export default Toolt;
