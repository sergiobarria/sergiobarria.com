import React, { ReactNode } from 'react';

interface SectionProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
}

export function Section({ children, ...rest }: SectionProps) {
  return (
    <section className='mb-12' {...rest}>
      {children}
    </section>
  );
}
