const isToday = (date: string): boolean => {
  const now = new Date()
  const checkDate = new Date(date)

  return now.getFullYear() === checkDate.getFullYear() &&
        now.getMonth() === checkDate.getMonth() &&
        now.getDate() === checkDate.getDate()
}

export default isToday
