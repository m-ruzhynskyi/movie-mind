export default function saveSortToLocal(element: HTMLSelectElement):void {
  localStorage.setItem('sort', element.value)
}