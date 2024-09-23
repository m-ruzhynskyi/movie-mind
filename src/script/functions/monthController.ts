// @ts-ignore
import months from '../variables/months.js'

export default function monthController(isNext: boolean = true, monthNow: number, setCurrentMonth: boolean = false): string {

  const currentDate: number = new Date().getMonth()
  if (setCurrentMonth) return months[currentDate]
  if (isNext) return months[monthNow < 11 ? monthNow + 1 : 0];
  else return months[monthNow > 0 ? monthNow - 1 : 11];
}
