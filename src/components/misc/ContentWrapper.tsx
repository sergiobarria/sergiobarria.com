import React, { PropsWithChildren } from 'react'
import cn from 'classnames'

export default function MarkdownWrapper({
  children,
}: PropsWithChildren<React.ReactNode>) {
  return (
    <div
      className={cn(
        'prose mt-14 max-w-none dark:prose-invert prose-a:text-red-500 prose-a:italic prose-a:font-semibold prose-code:text-red-500',
        'prose-pre:bg-gray-200 prose-pre:text-amber-800 prose-pre:border-[1px] prose-pre:border-gray-600'
      )}
    >
      {children}
    </div>
  )
}
