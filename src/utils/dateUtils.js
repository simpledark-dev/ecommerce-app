export const getDisplayJoinedTime = joinedDate => {
  const dateDiff = {
    inDays: function (d1, d2) {
      const t2 = d2.getTime()
      const t1 = d1.getTime()

      return parseInt((t2 - t1) / (24 * 3600 * 1000))
    },
    inWeeks: function (d1, d2) {
      const t2 = d2.getTime()
      const t1 = d1.getTime()

      return parseInt((t2 - t1) / (24 * 3600 * 1000 * 7))
    },
    inMonths: function (d1, d2) {
      const d1Y = d1.getFullYear()
      const d2Y = d2.getFullYear()
      const d1M = d1.getMonth()
      const d2M = d2.getMonth()

      return d2M + 12 * d2Y - (d1M + 12 * d1Y)
    },
    inYears: function (d1, d2) {
      return d2.getFullYear() - d1.getFullYear()
    }
  }

  const years = dateDiff.inYears(joinedDate, new Date())
  if (years > 0) return `${years} year${years > 1 ? 's' : ''} ago`
  const months = dateDiff.inMonths(joinedDate, new Date())
  if (months > 0) return `${months} month${months > 1 ? 's' : ''} ago`
  const weeks = dateDiff.inWeeks(joinedDate, new Date())
  if (weeks > 0) return `${weeks} week${weeks > 1 ? 's' : ''} ago`
  const days = dateDiff.inDays(joinedDate, new Date())
  if (days === 0) return 'today'
  return `${days} day${days > 1 ? 's' : ''} ago`
}
