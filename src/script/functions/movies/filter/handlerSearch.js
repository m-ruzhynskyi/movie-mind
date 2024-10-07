import linkBuilder from "./linkBuilder.js";
export default function handlerSearch() {
    const defaultValues = {
        releaseDate: [1900, new Date().getFullYear()],
        rating: [0, 10],
        runTime: [0, 400],
        genres: [],
        sort: 'popularity.desc',
    };
    const releaseDates = JSON.parse(localStorage.getItem('releaseDate')) || null;
    const ratings = JSON.parse(localStorage.getItem('rating')) || null;
    const runTimes = JSON.parse(localStorage.getItem('runTime')) || null;
    const genres = JSON.parse(localStorage.getItem('genres')) || null;
    const sort = JSON.parse(localStorage.getItem('sort')) || null;
    const nowSort = localStorage.getItem('nowSort') || '';
    const filtersParameters = [releaseDates, ratings, runTimes, genres, sort], elementsToSet = ['nowReleaseDate', 'nowRating', 'nowRunTime', 'nowGenres', 'nowSort'], elementsToClear = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'], listOfFilters = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'];
    if (!nowSort) {
        elementsToSet.forEach((element, id) => {
            localStorage.setItem(element, JSON.stringify(defaultValues[listOfFilters[id]]));
        });
        linkBuilder(1);
    }
    filtersParameters.forEach((element, id) => {
        if (element) {
            localStorage.setItem(elementsToSet[id], JSON.stringify(element));
            localStorage.removeItem(elementsToClear[id]);
            linkBuilder(1);
        }
    });
    const searchButton = document.querySelector('.movies__main__filters__button');
    searchButton?.classList.add('disabled');
    searchButton?.removeEventListener('click', () => handlerSearch());
}
//# sourceMappingURL=handlerSearch.js.map