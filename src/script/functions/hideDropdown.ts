export default function hideDropdown(element: HTMLElement | null) {
  const parent = element?.parentElement;
  const titleElement = parent?.querySelector('.filter__wrapper');
  console.log(titleElement)
  titleElement?.classList.toggle('to-hide')

  element?.classList.toggle('hidedDropdown');
}
