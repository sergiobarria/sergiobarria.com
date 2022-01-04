import { IPropsWithChildren } from '@/types/interfaces'

export default function ({ children }: IPropsWithChildren) {
  return <section className="mt-16">{children}</section>
}
