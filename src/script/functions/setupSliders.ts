export default function setupSliders():void {
  const slidersFrom = document.querySelectorAll('.sliders_control-to') as NodeListOf<HTMLInputElement>;
  const slidersTo = document.querySelectorAll('.sliders_control-from') as NodeListOf<HTMLInputElement>;

  const valueFrom = document.querySelectorAll('.sliders_control__label__span-from') as NodeListOf<HTMLLabelElement>;
  const valueTo = document.querySelectorAll('.sliders_control__label__span-to') as NodeListOf<HTMLSpanElement>;

  slidersFrom.forEach((sliderFrom: HTMLInputElement, id: number) => sliderFrom.addEventListener('input', function () {
    const fromValue: number = parseInt(this.value, 10);
    const toValue: number = parseInt(slidersTo[id].value, 10);

    valueFrom[id].textContent = fromValue.toString();

    if (toValue === fromValue) {
      slidersTo[id].value = fromValue.toString();
      valueTo[id].textContent = fromValue.toString();
    } else if (toValue < fromValue) {
      slidersTo[id].value = fromValue.toString();
      valueTo[id].textContent = fromValue.toString();
    }
  }));

  slidersTo.forEach((sliderTo: HTMLInputElement, id: number) => sliderTo.addEventListener('input', function () {
    const fromValue: number = parseInt(slidersFrom[id].value, 10);
    const toValue: number = parseInt(this.value, 10);

    valueTo[id].textContent = toValue.toString();

    if (toValue <= fromValue) {
      slidersFrom[id].value = toValue.toString();
      valueFrom[id].textContent = toValue.toString();
    }
  }));
}
