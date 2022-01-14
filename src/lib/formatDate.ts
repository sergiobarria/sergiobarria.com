// type da = {
//   date: string
// }

// interface Props {
//   date: string
// }

const formatDate = (date: string) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return formattedDate
}

export default formatDate
