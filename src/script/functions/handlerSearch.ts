export default function handlerSearch() {
  const defaultValues: Record<string, number[] | string | never[]> = {
    releaseDate: [1900, new Date().getFullYear()],
    rating: [0, 10],
    runTime: [0, 400],
    genres: [],
    sort: 'popularity.desc',
  };

  const releaseDates: [number, number] | null = JSON.parse(<string>localStorage.getItem('releaseDate')) || null;
  const ratings: [number, number] | null = JSON.parse(<string>localStorage.getItem('rating')) || null;
  const runTimes: [number, number] | null = JSON.parse(<string>localStorage.getItem('runTime')) || null;
  const genres: number[] | null = JSON.parse(<string>localStorage.getItem('genres')) || null;
  const sort: string | null = JSON.parse(<string>localStorage.getItem('sort')) || null;

  const nowSort: string = localStorage.getItem('nowSort') || '';
  const nowReleaseDate: [number, number] = JSON.parse(localStorage.getItem('nowReleaseDate') || '[0, 0]');
  const nowRating: [number, number] = JSON.parse(localStorage.getItem('nowRating') || '[0, 0]');
  const nowRunTime: [number, number] = JSON.parse(localStorage.getItem('nowRunTime') || '[0, 0]');
  const nowGenres: number[] = JSON.parse(localStorage.getItem('nowGenres') || '[]');

  let getLink: string = '';

  const filtersParameters: (string | [number, number] | number[] | null)[] = [releaseDates, ratings, runTimes, genres, sort],

    elementsToSet = ['nowReleaseDate', 'nowRating', 'nowRunTime', 'nowGenres', 'nowSort'],
    elementsToClear = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'],
    listOfFilters = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'];

  if (!nowSort) {
    getLink = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';

    elementsToSet.forEach((element, id) => {
      localStorage.setItem(element, JSON.stringify(defaultValues[listOfFilters[id]]));
    });
  }

  filtersParameters.forEach((element, id) => {
    if (element) {
      localStorage.setItem(elementsToSet[id], JSON.stringify(element));
      localStorage.removeItem(elementsToClear[id]);
    }
  })

  const searchButton: HTMLButtonElement | null = document.querySelector('.movies__main__filters__button');
  searchButton?.classList.add('disabled');
  searchButton?.removeEventListener('click', () => handlerSearch())
}
