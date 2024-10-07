import IGenre from "../../../interfaces/IGenre.js";
import getGenres from "./getGenres.js";
import searchButtonIndicator from "./searchButtonIndicator.js";

export async function renderGenres(): Promise<void> {
  const genresResponce: IGenre[] = await getGenres();
  const genres = document.querySelector(".movies__main__filters__filters__dropdown__genres__ul") as HTMLUListElement;
  let chosenGenres: number[] = JSON.parse(localStorage.getItem('genres') || '[]');

  genresResponce.forEach(genre => {
    const li: HTMLLIElement = document.createElement("li");
    li.textContent = genre.name;
    li.id = genre.id.toString();
    li.classList.add('movies__main__filters__filters__dropdown__genres__ul__li');

    li.addEventListener('click', () => {
      if (li.classList.contains('active')) chosenGenres = chosenGenres.filter(id => id !== genre.id);
      else chosenGenres.push(genre.id);

      localStorage.setItem('genres', JSON.stringify(chosenGenres));

      li.classList.toggle('active');
      searchButtonIndicator()
    });

    genres.append(li);
  });

}
