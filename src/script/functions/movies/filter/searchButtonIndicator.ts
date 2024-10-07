import handlerSearch from "./handlerSearch.js";

export default function searchButtonIndicator(): void {
  const searchButton: HTMLButtonElement | null = document.querySelector('.movies__main__filters__button');

  const nowSorted: string = localStorage.getItem('nowSort') || '';
  const nowReleaseDate: [number, number] | [] = JSON.parse(localStorage.getItem('nowReleaseDate') || '[]');
  const nowRating: [number, number] | [] = JSON.parse(localStorage.getItem('nowRating') || '[]');
  const nowRunTime: [number, number] | [] = JSON.parse(localStorage.getItem('nowRunTime') || '[]');
  const nowGenres: number[] = JSON.parse(localStorage.getItem('nowGenres') || '[]');

  const releaseDates: [number, number] | [] = JSON.parse(localStorage.getItem('releaseDate') || '[]');
  const ratings: [number, number] | [] = JSON.parse(localStorage.getItem('rating') || '[]');
  const runTimes: [number, number] | [] = JSON.parse(localStorage.getItem('runTime') || '[]');
  const genres: number[] = JSON.parse(localStorage.getItem('genres') || '[]');

  const sort: string = localStorage.getItem('sort') || '';

  function removeHandler() {
    searchButton?.removeEventListener('click', () => handlerSearch())
  }

  function addHandler() {
    searchButton?.addEventListener('click', () => handlerSearch())
  }

  if (sort !== nowSorted) {
    searchButton?.classList.remove('disabled');
    addHandler()
    return;
  }

  const localStorageVariables: (number[] | [number, number])[] = [releaseDates, ratings, runTimes, genres];
  const newLocalStorageVariables: (number[] | [number, number])[] = [nowReleaseDate, nowRating, nowRunTime, nowGenres];

  const shouldDisable = !localStorageVariables.some((element, index) => {
    const currentVariable = newLocalStorageVariables[index];
    return element.length !== 0 && JSON.stringify(element) !== JSON.stringify(currentVariable);
  });

  if (shouldDisable) {
    searchButton?.classList.add('disabled')
    addHandler()
  }
  else {
    searchButton?.classList.remove('disabled')
    removeHandler()
  }
}
