// Re-format date string from form input
const formatDate = (dateString) => {
  if (!dateString) return undefined
  const month = dateString.substring(5, 7)
  const day = dateString.substring(8, 11)
  const year = dateString.substring(0, 4)
  return `${month}/${day}/${year}`
}
// Remove blank inputs before data is sent to backend
const filterBlankInputs = (formData) => {
  const formDataCopy = { ...formData }
  for (let inputVal in formDataCopy) {
    if (formDataCopy[inputVal] === '') delete formDataCopy[inputVal]
  }
  return formDataCopy
}
// Replace null with '' when data is received from the backend
const replaceNullValues = (leagueData) => {
  return leagueData.map((league) => {
    const leagueCopy = { ...league }
    for (let key in leagueCopy) {
      if (leagueCopy[key] === null) leagueCopy[key] = ''
    }
    return leagueCopy
  })
}

export { formatDate, filterBlankInputs, replaceNullValues }
