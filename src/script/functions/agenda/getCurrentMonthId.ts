// @ts-ignore
import months from '../../variables/months.js'

export default function getCurrentMonthId(month: string):number {
  const monthName: string = month.split(' ')[0]
  return months.indexOf(monthName)
}

