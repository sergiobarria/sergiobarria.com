import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(...inputs));
}

export function convertTimeToDecimal(time?: string) {
    if (!time) return 0;

    const hours = time.split(' ')[0];
    const minutes = time.split(' ')[2];

    const hoursToDecimal = parseInt(hours) + parseInt(minutes) / 60;

    return Math.round(hoursToDecimal * 5) / 5 + ' hrs';
}
