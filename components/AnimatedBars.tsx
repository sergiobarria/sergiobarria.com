'use client';

import { useEffect, useRef } from 'react';
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
                    'scaleY(0.5) translateY(0.37rem)',
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
    }, []);

    return (
        <div className="flex items-baseline gap-0.5">
            <span id="bar1" className="h-[4px] w-[2px] bg-green-500"></span>
            <span id="bar2" className="h-[6px] w-[2px] bg-green-500"></span>
            <span id="bar3" className="h-[8px] w-[2px] bg-green-500"></span>
        </div>
    );
}
