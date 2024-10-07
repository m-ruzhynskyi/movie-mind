import searchButtonIndicator from "./searchButtonIndicator.js";
export default function saveSortToLocal(element) {
    localStorage.setItem('sort', JSON.stringify(element.value));
    searchButtonIndicator();
}
//# sourceMappingURL=saveSortToLocal.js.map