import handlerSearch from "./handlerSearch.js";
export default function searchButtonIndicator() {
    const searchButton = document.querySelector('.movies__main__filters__button');
    const nowSorted = localStorage.getItem('nowSort') || '';
    const nowReleaseDate = JSON.parse(localStorage.getItem('nowReleaseDate') || '[]');
    const nowRating = JSON.parse(localStorage.getItem('nowRating') || '[]');
    const nowRunTime = JSON.parse(localStorage.getItem('nowRunTime') || '[]');
    const nowGenres = JSON.parse(localStorage.getItem('nowGenres') || '[]');
    const releaseDates = JSON.parse(localStorage.getItem('releaseDate') || '[]');
    const ratings = JSON.parse(localStorage.getItem('rating') || '[]');
    const runTimes = JSON.parse(localStorage.getItem('runTime') || '[]');
    const genres = JSON.parse(localStorage.getItem('genres') || '[]');
    const sort = localStorage.getItem('sort') || '';
    function removeHandler() {
        searchButton?.removeEventListener('click', () => handlerSearch());
    }
    function addHandler() {
        searchButton?.addEventListener('click', () => handlerSearch());
    }
    if (sort !== nowSorted) {
        searchButton?.classList.remove('disabled');
        addHandler();
        return;
    }
    const localStorageVariables = [releaseDates, ratings, runTimes, genres];
    const newLocalStorageVariables = [nowReleaseDate, nowRating, nowRunTime, nowGenres];
    const shouldDisable = !localStorageVariables.some((element, index) => {
        const currentVariable = newLocalStorageVariables[index];
        return element.length !== 0 && JSON.stringify(element) !== JSON.stringify(currentVariable);
    });
    if (shouldDisable) {
        searchButton?.classList.add('disabled');
        addHandler();
    }
    else {
        searchButton?.classList.remove('disabled');
        removeHandler();
    }
}
//# sourceMappingURL=searchButtonIndicator.js.map