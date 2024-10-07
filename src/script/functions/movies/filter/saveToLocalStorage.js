import searchButtonIndicator from "./searchButtonIndicator.js";
export default function saveToLocalStorage(element, mode, rangeSelector) {
    const range = document.querySelector(`#${rangeSelector}`);
    const dateStorage = JSON.parse(localStorage.getItem(mode)) || [+range.min, +range.max];
    if (element === 'to')
        dateStorage[1] = Number(range.value);
    else
        dateStorage[0] = Number(range.value);
    localStorage.setItem(mode, JSON.stringify(dateStorage));
    searchButtonIndicator();
}
//# sourceMappingURL=saveToLocalStorage.js.map