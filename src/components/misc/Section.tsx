import { IPropsWithChildren } from '@/types/interfaces'

export default function Section({ children }: IPropsWithChildren) {
  return <section className="mt-16">{children}</section>
}
