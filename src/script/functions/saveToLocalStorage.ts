import searchButtonIndicator from "./searchButtonIndicator.js";

export default function saveToLocalStorage(element: string, mode: string, rangeSelector: string) {
  const range = document.querySelector(`#${rangeSelector}`) as HTMLInputElement
  
  const dateStorage: [number, number] = JSON.parse(<string>localStorage.getItem(mode)) || [+range.min, +range.max]

  if (element === 'to') dateStorage[1] = Number(range.value)
  else dateStorage[0] = Number(range.value)

  localStorage.setItem(mode, JSON.stringify(dateStorage))

  searchButtonIndicator()
}

