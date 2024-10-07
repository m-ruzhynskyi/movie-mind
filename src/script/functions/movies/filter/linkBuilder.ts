import getMovies from "./getMovies.js";
import renderMovies from "../moviSector/renderMovies.js";

export default function linkBuilder(page: number) {
  let getLink: string = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US';

  const releaseDates: [number, number] | null = JSON.parse(<string>localStorage.getItem('nowReleaseDate')) || null;
  const ratings: [number, number] | null = JSON.parse(<string>localStorage.getItem('nowRating')) || null;
  const runTimes: [number, number] | null = JSON.parse(<string>localStorage.getItem('nowRunTime')) || null;
  const genres: number[] | null = JSON.parse(<string>localStorage.getItem('nowGenres')) || null;
  const sort: string | null = JSON.parse(<string>localStorage.getItem('nowSort')) || null;

  const filtersParameters: (string | [number, number] | number[] | null)[] = [releaseDates, ratings, runTimes, genres, sort]

  filtersParameters.forEach((element, id) => {
    if (element) {
      switch (id) {
        case 0:
          const [startYear, endYear] = element as [number, number];
          getLink += `&primary_release_date.gte=${startYear}-01-01&primary_release_date.lte=${endYear}-12-31`;
          break;
        case 1:
          const [minRating, maxRating] = element as [number, number];
          getLink += `&vote_average.gte=${minRating}&vote_average.lte=${maxRating}`;
          break;
        case 2:
          const [minRuntime, maxRuntime] = element as [number, number];
          getLink += `&with_runtime.gte=${minRuntime}&with_runtime.lte=${maxRuntime}`;
          break;
        case 3:
          const genreList = (element as number[]).join(',');
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