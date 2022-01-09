import React from 'react'

interface IProps {
  pageHeaderData: {
    title: string
    subtitle?: string
    text: string
  }
}

export default function PageHeader({ pageHeaderData }: IProps) {
  const { title, subtitle, text } = pageHeaderData

  return (
    <div>
      <h1>{title}</h1>
      <hr className="my-6" />
      <p className="mb-6 prose max-w-none long-text dark:prose-invert">
        {text}
      </p>
    </div>
  )
}
