type Props = {
  title: String
}

export default function SectionTitle({ title }: Props) {
  return <h2 className="heading-2">{title}</h2>
}
