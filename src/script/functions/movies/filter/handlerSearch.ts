import linkBuilder from "./linkBuilder.js";

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

  const filtersParameters: (string | [number, number] | number[] | null)[] = [releaseDates, ratings, runTimes, genres, sort],
    elementsToSet = ['nowReleaseDate', 'nowRating', 'nowRunTime', 'nowGenres', 'nowSort'],
    elementsToClear = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'],
    listOfFilters = ['releaseDate', 'rating', 'runTime', 'genres', 'sort'];

  if (!nowSort) {
    elementsToSet.forEach((element: string, id: number): void => {
      localStorage.setItem(element, JSON.stringify(defaultValues[listOfFilters[id]]));
    });

    linkBuilder(1)
  }

  filtersParameters.forEach((element: string | [number, number] | number[] | null, id: number): void => {
    if (element) {
      localStorage.setItem(elementsToSet[id], JSON.stringify(element));
      localStorage.removeItem(elementsToClear[id]);

      linkBuilder(1);
    }
  });


  const searchButton: HTMLButtonElement | null = document.querySelector('.movies__main__filters__button');
  searchButton?.classList.add('disabled');
  searchButton?.removeEventListener('click', () => handlerSearch());
}
