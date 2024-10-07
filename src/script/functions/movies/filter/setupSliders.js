export default function setupSliders() {
    const slidersFrom = document.querySelectorAll('.sliders_control-to');
    const slidersTo = document.querySelectorAll('.sliders_control-from');
    const valueFrom = document.querySelectorAll('.sliders_control__label__span-from');
    const valueTo = document.querySelectorAll('.sliders_control__label__span-to');
    slidersFrom.forEach((sliderFrom, id) => sliderFrom.addEventListener('input', function () {
        const fromValue = parseInt(this.value, 10);
        const toValue = parseInt(slidersTo[id].value, 10);
        valueFrom[id].textContent = fromValue.toString();
        if (toValue === fromValue) {
            slidersTo[id].value = fromValue.toString();
            valueTo[id].textContent = fromValue.toString();
        }
        else if (toValue < fromValue) {
            slidersTo[id].value = fromValue.toString();
            valueTo[id].textContent = fromValue.toString();
        }
    }));
    slidersTo.forEach((sliderTo, id) => sliderTo.addEventListener('input', function () {
        const fromValue = parseInt(slidersFrom[id].value, 10);
        const toValue = parseInt(this.value, 10);
        valueTo[id].textContent = toValue.toString();
        if (toValue <= fromValue) {
            slidersFrom[id].value = toValue.toString();
            valueFrom[id].textContent = toValue.toString();
        }
    }));
}
//# sourceMappingURL=setupSliders.js.map