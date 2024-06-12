// Reformat date string from form input
const formatDate = (dateString) => {
  const month = dateString.substring(5, 7)
  const day = dateString.substring(8, 11)
  const year = dateString.substring(0, 4)
  return `${month}/${day}/${year}`
}

export { formatDate }
