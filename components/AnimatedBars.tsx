'use client';

import { useEffect } from 'react';
import { animate } from 'motion';

export function AnimatedBars() {
    useEffect(() => {
        animate(
            '#bar1',
            {
                transform: [
                    'scaleY(1.0) translateY(0rem)',
                    'scaleY(1.5) translateY(-0.082rem)',
                    'scaleY(1.0) translateY(0rem)',
                ],
            },
            {
                duration: 0.5,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        );
        animate(
            '#bar2',
            {
                transform: [
                    'scaleY(1.0) translateY(0rem)',
                    'scaleY(3) translateY(-0.083rem)',
                    'scaleY(1.0) translateY(0rem)',
                ],
            },
            {
                delay: 0.2,
                duration: 0.75,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        );
        animate(
            '#bar3',
            {
                transform: [
                    'scaleY(1.0)  translateY(0rem)',
                    'scaleY(0.5) translateY(0.31rem)',
                    'scaleY(1.0)  translateY(0rem)',
                ],
            },
            {
                delay: 0.3,
                duration: 0.75,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        );
        animate(
            '#bar4',
            {
                transform: [
                    'scaleY(1.0) translateY(0rem)',
                    'scaleY(2) translateY(-0.083rem)',
                    'scaleY(1.0) translateY(0rem)',
                ],
            },
            {
                delay: 0.4,
                duration: 0.75,
                repeat: Infinity,
                easing: ['ease-in-out'],
            }
        );
    }, []);

    return (
        <div className="flex w-auto items-end overflow-hidden gap-0.5">
            <span id="bar1" className="h-2 w-[1px] bg-green-500" />
            <span id="bar2" className="h-1 w-[1px] bg-green-500 " />
            <span id="bar3" className="h-3 w-[1px] bg-green-500" />
            <span id="bar4" className="h-1 w-[1px] bg-green-500" />
        </div>
    );
}
