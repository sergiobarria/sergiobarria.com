import React from 'react';

export default function TextBodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className='prose max-w-none prose-a:no-underline prose-p:my-3 dark:prose-invert'>
      {children}
    </article>
  );
}
