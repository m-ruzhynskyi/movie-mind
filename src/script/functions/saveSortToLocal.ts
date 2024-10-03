import searchButtonIndicator from "./searchButtonIndicator.js";

export default function saveSortToLocal(element: HTMLSelectElement):void {
  localStorage.setItem('sort', JSON.stringify(element.value))

  searchButtonIndicator()
}