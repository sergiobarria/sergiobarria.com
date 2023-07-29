import * as React from 'react';

import clsx from 'clsx';
import { AiFillFire, AiFillInfoCircle, AiFillWarning } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';

import { useAppTheme } from '@/hooks/useAppTheme';

interface Props {
  type?: 'info' | 'tip' | 'warn' | 'error';
}

function CalloutBoxType({ type }: Props) {
  if (type === 'info') {
    return (
      <>
        <AiFillInfoCircle className='mr-2' /> Info
      </>
    );
  }
  if (type === 'warn') {
    return (
      <>
        <AiFillWarning className='mr-2' /> Warning
      </>
    );
  }
  if (type === 'error') {
    return (
      <>
        <BiErrorCircle className='mr-2' /> Error
      </>
    );
  }
  return (
    <>
      <AiFillFire className='mr-2' /> Tip
    </>
  );
}

export default function CalloutBox({
  type = 'tip',
  children,
}: React.PropsWithChildren<Props>) {
  const { currentTheme } = useAppTheme();

  return (
    <div
      className={clsx(
        'relative my-6 rounded-md border-2 p-4',
        type === 'tip' && 'border-green-500 text-green-500',
        type === 'info' && 'border-blue-500 text-blue-500',
        type === 'warn' && 'border-yellow-500 text-yellow-500',
        type === 'error' && 'border-red-500 text-red-500'
      )}
    >
      <div
        className={clsx(
          'absolute -top-3 left-3 flex items-center px-4 text-sm',
          currentTheme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'
        )}
      >
        <CalloutBoxType type={type} />
      </div>
      <div className='text-gray-700 dark:text-gray-300'>
        {children ? children : 'CalloutBox'}
      </div>
    </div>
  );
}
