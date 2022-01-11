// type da = {
//   date: string
// }

interface Props {
  date: string
}

export const formatDate = ({ date }: Props) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return formattedDate
}
