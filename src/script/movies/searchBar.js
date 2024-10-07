import renderMovies from "../functions/movies/moviSector/renderMovies.js";
export default function searchBar() {
    const searchBarForm = document.querySelector('.movies__header__search');
    const apiKey = 'e27b9bf02bdfce7f9cd424ca920eea73'; // Your API Key
    searchBarForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const searchBarInput = document.querySelector('.movies__header__search__input');
        const query = searchBarInput.value.trim();
        try {
            const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(query)}`;
            const response = await fetch(url);
            const data = await response.json();
            renderMovies(data.results, true, true);
        }
        catch (error) {
            console.error('Error fetching movie data:', error);
        }
    });
}
//# sourceMappingURL=searchBar.js.map