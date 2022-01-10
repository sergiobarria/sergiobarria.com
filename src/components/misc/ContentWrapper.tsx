import React, { PropsWithChildren } from 'react'

export default function MarkdownWrapper({
  children,
}: PropsWithChildren<React.ReactNode>) {
  return (
    <div className="prose mt-14 max-w-none dark:prose-invert ">{children}</div>
  )
}
