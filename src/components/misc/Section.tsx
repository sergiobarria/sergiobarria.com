import { PropsWithChildren } from 'react'

export default function Section({ children }: PropsWithChildren<any>) {
  return <section className="mt-16">{children}</section>
}
