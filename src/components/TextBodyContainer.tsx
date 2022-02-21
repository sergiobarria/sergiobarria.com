import React from 'react';

export default function TextBodyContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <article className='prose max-w-none prose-p:my-3 prose-a:no-underline dark:prose-invert'>
      {children}
    </article>
  );
}
