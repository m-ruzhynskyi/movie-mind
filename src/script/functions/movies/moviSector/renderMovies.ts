import IPosterMovie from "../../../interfaces/IPosterMovie.js";
import modalCreate from "../../../movies/modal/modalCreate.js";
import linkBuilder from "../filter/linkBuilder.js";

export default function renderMovies(movies: IPosterMovie[], isNew?: boolean, isSearch?: boolean) {
  const movieList: HTMLDivElement | null = document.querySelector('.movies__main__list');
  const loadMoreButton: HTMLButtonElement | null = document.querySelector('.movies__main__list__button');

  if (isNew) movieList!.innerHTML = '';
  loadMoreButton!.style.display = isSearch ? 'none' : 'block';

  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movies__main__list__movie');

    const movieImg = document.createElement('img');
    movieImg.classList.add('movies__main__list__movie__img');
    movieImg.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    const movieInfo = document.createElement('div');
    movieInfo.classList.add('movies__main__list__movie__info');

    const movieTitle = document.createElement('h3');
    movieTitle.classList.add('movies__main__list__movie__info__title');
    movieTitle.textContent = movie.title;

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('movies__main__list__movie__info__rating');

    const movieRating = document.createElement('p');
    const userScore = Math.round(movie.vote_average / 10 * 100)
    movieRating.classList.add('movies__main__list__movie__info__rating__text');
    movieRating.textContent = `${userScore}%`;

    if (userScore > 40 && userScore < 40) {
      ratingDiv.classList.add('awful');
    } else if (userScore > 40 && userScore < 70) {
      ratingDiv.classList.add('normal');
    } else {
      ratingDiv.classList.add('good');
    }

    const movieReleaseDate = document.createElement('p');
    movieReleaseDate.classList.add('movies__main__list__movie__info__releaseDate');
    movieReleaseDate.textContent = movie.release_date;

    ratingDiv.append(movieRating)
    movieInfo.append(ratingDiv, movieTitle, movieReleaseDate);
    movieElement.append(movieImg, movieInfo);
    movieList?.append(movieElement);


    [movieTitle, movieImg].forEach(element => element.addEventListener('click', () => {
      modalCreate(movie.id);
    }))
  })

  if (isSearch) {
    const clearSearchButton: HTMLButtonElement | null = document.createElement('button');
    const inputField = document.querySelector('.movies__header__search__input') as HTMLInputElement;
    const moviesFilterDiv = document.querySelector('.movies__main__filters') as HTMLDivElement;

    clearSearchButton.classList.add('movies__main__list__button', 'clearSearch');
    clearSearchButton.textContent = 'Clear search';

    clearSearchButton.addEventListener('click', () => {
      linkBuilder(1)
      clearSearchButton.remove()
      inputField.value = ''
    })

    moviesFilterDiv?.prepend(clearSearchButton)
  }
}