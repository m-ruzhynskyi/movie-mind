import setupSliders from "../../functions/movies/filter/setupSliders.js";
import saveToLocalStorage from "../../functions/movies/filter/saveToLocalStorage.js";
import hideDropdown from "../../functions/movies/filter/hideDropdown.js";
import saveSortToLocal from "../../functions/movies/filter/saveSortToLocal.js";
import {renderGenres} from "../../functions/movies/filter/renderAndSetGenres.js";
import handlerSearch from "../../functions/movies/filter/handlerSearch.js";
import linkBuilder from "../../functions/movies/filter/linkBuilder.js";

const sortShowButton: HTMLElement | null = document.querySelector('.movies__main__filters__wrapper')
const sortDropdown: HTMLElement | null = document.querySelector('.movies__main__filters__sort__dropdown')

const filtersShowButton: HTMLElement | null = document.querySelector('.movies__main__filters__filters__wrapper')
const filtersDropdown: HTMLElement | null = document.querySelector('.movies__main__filters__filters__dropdown')

const releaseDateTo: HTMLInputElement | null = document.querySelector('.sliders_control__releaseDate-to')
const releaseDateFrom: HTMLInputElement | null = document.querySelector('.sliders_control__releaseDate-from')

const ratingTo: HTMLInputElement | null = document.querySelector('.sliders_control__rating-to')
const ratingFrom: HTMLInputElement | null = document.querySelector('.sliders_control__rating-from')

const runTimeTo: HTMLInputElement | null = document.querySelector('.sliders_control__runTime-to')
const runTimeFrom: HTMLInputElement | null = document.querySelector('.sliders_control__runTime-from')

const sort: HTMLSelectElement | null = document.querySelector('.movies__main__filters__sort__dropdown__select')

const searchButton: HTMLElement | null = document.querySelector('.movies__main__list__button')

const dropdowns = [sortShowButton, filtersShowButton].filter(Boolean) as HTMLElement[]
const releaseDateInputs = [releaseDateFrom, releaseDateTo].filter(Boolean) as HTMLInputElement[]
const ratingInputs = [ratingFrom, ratingTo].filter(Boolean) as HTMLInputElement[]
const runTimeInputs = [runTimeFrom, runTimeTo].filter(Boolean) as HTMLInputElement[]


dropdowns.forEach(element => element.addEventListener('click', () => hideDropdown(element === sortShowButton ? sortDropdown : filtersDropdown)))

sort?.addEventListener('change', () => saveSortToLocal(sort))

searchButton?.addEventListener('click', () => {
  if (searchButton) {
    const pageNext = Number(searchButton.dataset.page) + 1
    searchButton.dataset.page = `${pageNext}`

    linkBuilder(pageNext)
  }
})

releaseDateInputs.forEach(input => input.addEventListener('input', () => {
  const element: string = `${input === releaseDateFrom ? 'to' : 'from'}`
  const rangeSelector: string = `${input === releaseDateFrom ? 'from' : 'to'}Slider`
  saveToLocalStorage(element, 'releaseDate', rangeSelector)
}))

ratingInputs.forEach(input => input.addEventListener('input', () => {
  const element: string = `${input === ratingFrom ? 'to' : 'from'}`
  const rangeSelector: string = `${input === ratingFrom ? 'from' : 'to'}SliderRating`
  saveToLocalStorage(element, 'rating', rangeSelector)
}))

runTimeInputs.forEach(input => input.addEventListener('input', () => {
  const element: string = `${input === runTimeFrom ? 'to' : 'from'}`
  const rangeSelector: string = `${input === runTimeFrom ? 'from' : 'to'}SliderRunTime`
  saveToLocalStorage(element, 'runTime', rangeSelector)
}))

document.addEventListener('DOMContentLoaded',
  () => {
    renderGenres();
    setupSliders();
    handlerSearch();
    if (releaseDateFrom) releaseDateFrom.max = new Date().getFullYear().toString();
  }
)