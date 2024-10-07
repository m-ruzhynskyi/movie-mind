import getGenres from "./getGenres.js";
import searchButtonIndicator from "./searchButtonIndicator.js";
export async function renderGenres() {
    const genresResponce = await getGenres();
    const genres = document.querySelector(".movies__main__filters__filters__dropdown__genres__ul");
    let chosenGenres = JSON.parse(localStorage.getItem('genres') || '[]');
    genresResponce.forEach(genre => {
        const li = document.createElement("li");
        li.textContent = genre.name;
        li.id = genre.id.toString();
        li.classList.add('movies__main__filters__filters__dropdown__genres__ul__li');
        li.addEventListener('click', () => {
            if (li.classList.contains('active'))
                chosenGenres = chosenGenres.filter(id => id !== genre.id);
            else
                chosenGenres.push(genre.id);
            localStorage.setItem('genres', JSON.stringify(chosenGenres));
            li.classList.toggle('active');
            searchButtonIndicator();
        });
        genres.append(li);
    });
}
//# sourceMappingURL=renderAndSetGenres.js.map