import setupSliders from "../../functions/movies/filter/setupSliders.js";
import saveToLocalStorage from "../../functions/movies/filter/saveToLocalStorage.js";
import hideDropdown from "../../functions/movies/filter/hideDropdown.js";
import saveSortToLocal from "../../functions/movies/filter/saveSortToLocal.js";
import { renderGenres } from "../../functions/movies/filter/renderAndSetGenres.js";
import handlerSearch from "../../functions/movies/filter/handlerSearch.js";
import linkBuilder from "../../functions/movies/filter/linkBuilder.js";
const sortShowButton = document.querySelector('.movies__main__filters__wrapper');
const sortDropdown = document.querySelector('.movies__main__filters__sort__dropdown');
const filtersShowButton = document.querySelector('.movies__main__filters__filters__wrapper');
const filtersDropdown = document.querySelector('.movies__main__filters__filters__dropdown');
const releaseDateTo = document.querySelector('.sliders_control__releaseDate-to');
const releaseDateFrom = document.querySelector('.sliders_control__releaseDate-from');
const ratingTo = document.querySelector('.sliders_control__rating-to');
const ratingFrom = document.querySelector('.sliders_control__rating-from');
const runTimeTo = document.querySelector('.sliders_control__runTime-to');
const runTimeFrom = document.querySelector('.sliders_control__runTime-from');
const sort = document.querySelector('.movies__main__filters__sort__dropdown__select');
const searchButton = document.querySelector('.movies__main__list__button');
const dropdowns = [sortShowButton, filtersShowButton].filter(Boolean);
const releaseDateInputs = [releaseDateFrom, releaseDateTo].filter(Boolean);
const ratingInputs = [ratingFrom, ratingTo].filter(Boolean);
const runTimeInputs = [runTimeFrom, runTimeTo].filter(Boolean);
dropdowns.forEach(element => element.addEventListener('click', () => hideDropdown(element === sortShowButton ? sortDropdown : filtersDropdown)));
sort?.addEventListener('change', () => saveSortToLocal(sort));
searchButton?.addEventListener('click', () => {
    if (searchButton) {
        const pageNext = Number(searchButton.dataset.page) + 1;
        searchButton.dataset.page = `${pageNext}`;
        linkBuilder(pageNext);
    }
});
releaseDateInputs.forEach(input => input.addEventListener('input', () => {
    const element = `${input === releaseDateFrom ? 'to' : 'from'}`;
    const rangeSelector = `${input === releaseDateFrom ? 'from' : 'to'}Slider`;
    saveToLocalStorage(element, 'releaseDate', rangeSelector);
}));
ratingInputs.forEach(input => input.addEventListener('input', () => {
    const element = `${input === ratingFrom ? 'to' : 'from'}`;
    const rangeSelector = `${input === ratingFrom ? 'from' : 'to'}SliderRating`;
    saveToLocalStorage(element, 'rating', rangeSelector);
}));
runTimeInputs.forEach(input => input.addEventListener('input', () => {
    const element = `${input === runTimeFrom ? 'to' : 'from'}`;
    const rangeSelector = `${input === runTimeFrom ? 'from' : 'to'}SliderRunTime`;
    saveToLocalStorage(element, 'runTime', rangeSelector);
}));
document.addEventListener('DOMContentLoaded', () => {
    renderGenres();
    setupSliders();
    handlerSearch();
    if (releaseDateFrom)
        releaseDateFrom.max = new Date().getFullYear().toString();
});
//# sourceMappingURL=filters.js.map