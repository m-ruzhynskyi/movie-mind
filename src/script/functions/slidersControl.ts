export default function slidersControl(element: string, value: number) {
  const input = document.querySelector(`.sliders_control__label__releaseDate-${element}`) as HTMLInputElement
  input.innerText = String(value)

  const range = document.querySelector(`#${element !== 'to' ? 'to' : 'from'}Slider`) as HTMLInputElement

  const dateStorage:[number, number] = JSON.parse(<string>localStorage.getItem('releaseDate')) || [1900, new Date().getFullYear()]

  if (element === 'to') dateStorage[1] = Number(range.value)
  else dateStorage[0] = Number(range.value)

  localStorage.setItem('releaseDate', JSON.stringify(dateStorage))
}