import React from 'react';

interface Props {
  children: React.ReactNode;
}

export function PageContainer({ children }: Props) {
  return (
    <div className='mx-auto flex max-w-3xl flex-col justify-center'>
      {children}
    </div>
  );
}
