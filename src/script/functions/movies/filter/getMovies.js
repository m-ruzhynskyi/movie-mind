export default async function getMovies(link) {
    const API_URL = link;
    const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY5NzQ5NmM4MjJjNDhlOGRmYmM2OTA4NjRiMWJmNCIsIm5iZiI6MTcyNzM0MjYxMy4yNjA0NTksInN1YiI6IjY2ZWFkNzBlMWJlY2E4Y2UwN2QzNzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haUXTF6a-Y1bN5H_2s3NZ5ricNhvTp5TyQJ-HrHXLQY';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: AUTH_TOKEN,
        },
    };
    try {
        const response = await fetch(API_URL, options);
        const data = await response.json();
        return data.results.map((movie) => ({
            poster_path: movie.poster_path,
            vote_average: movie.vote_average,
            release_date: movie.release_date,
            title: movie.title,
            id: movie.id
        }));
    }
    catch (error) {
        console.error('Error:', error);
        return [];
    }
}
//# sourceMappingURL=getMovies.js.map