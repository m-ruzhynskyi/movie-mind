import getMovies from "./getMovies.js";
import renderMovies from "../moviSector/renderMovies.js";
export default function linkBuilder(page) {
    let getLink = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';
    const releaseDates = JSON.parse(localStorage.getItem('nowReleaseDate')) || null;
    const ratings = JSON.parse(localStorage.getItem('nowRating')) || null;
    const runTimes = JSON.parse(localStorage.getItem('nowRunTime')) || null;
    const genres = JSON.parse(localStorage.getItem('nowGenres')) || null;
    const sort = JSON.parse(localStorage.getItem('nowSort')) || null;
    const filtersParameters = [releaseDates, ratings, runTimes, genres, sort];
    filtersParameters.forEach((element, id) => {
        if (element) {
            switch (id) {
                case 0:
                    const [startYear, endYear] = element;
                    getLink += `&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`;
                    break;
                case 1:
                    const [minRating, maxRating] = element;
                    getLink += `&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`;
                    break;
                case 2:
                    const [minRuntime, maxRuntime] = element;
                    getLink += `&with_runtime.gte=${minRuntime}&with_runtime.lte=${maxRuntime}`;
                    break;
                case 3:
                    const genreList = element.join(',');
                    if (genreList) {
                        getLink += `&with_genres=${genreList}`;
                    }
                    break;
                case 4:
                    getLink += `&sort_by=${element}`;
                    break;
            }
        }
    });
    getLink += `&page=${page}`;
    getMovies(getLink).then(res => renderMovies(res, page === 1));
}
//# sourceMappingURL=linkBuilder.js.map