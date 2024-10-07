export default function hideDropdown(element) {
    const parent = element?.parentElement;
    const titleElement = parent?.querySelector('.filter__wrapper');
    titleElement?.classList.toggle('to-hide');
    element?.classList.toggle('hidedDropdown');
}
//# sourceMappingURL=hideDropdown.js.map