import hideDropdown from "../../functions/hideDropdown.js";
import slidersControl from "../../functions/slidersControl.js";
import {renderGenres} from "../../functions/renderAndSetGenres.js";

const sortShowButton: HTMLElement | null = document.querySelector('.movies__main__filters__wrapper')
const sortDropdown: HTMLElement | null = document.querySelector('.movies__main__filters__sort__dropdown')

const filtersShowButton: HTMLElement | null = document.querySelector('.movies__main__filters__filters__wrapper')
const filtersDropdown: HTMLElement | null = document.querySelector('.movies__main__filters__filters__dropdown')

const releaseDateTo: HTMLInputElement | null = document.querySelector('.sliders_control__releaseDate-to')
const releaseDateFrom: HTMLInputElement | null = document.querySelector('.sliders_control__releaseDate-from')


const dropdowns = [sortShowButton, filtersShowButton].filter(Boolean) as HTMLElement[]
const releaseDateInputs = [releaseDateFrom, releaseDateTo].filter(Boolean) as HTMLInputElement[]

dropdowns.forEach(element => element.addEventListener('click', () => hideDropdown(element === sortShowButton ? sortDropdown : filtersDropdown)))

releaseDateInputs.forEach(input => input.addEventListener('input', () => {
  const element: string = `${input === releaseDateFrom ? 'to' : 'from'}`
  slidersControl(element, Number(input.value))
}))

document.addEventListener('DOMContentLoaded', () => renderGenres())