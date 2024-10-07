export default async function getMovie(id) {
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjdiOWJmMDJiZGZjZTdmOWNkNDI0Y2E5MjBlZWE3MyIsIm5iZiI6MTcyODI0MDkwOS45OTkzMjQsInN1YiI6IjY3MDJkYmU3YjE0NjI4MmY3Yjg1YTFhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tvy_U0DuTdvZnOviOmgteecj3bfrsP43HwUnY5z32Z4',
        },
    };
    try {
        const response = await fetch(url, options);
        const movieData = await response.json();
        return {
            genres: movieData.genres.map((genre) => ({
                id: genre.id,
                name: genre.name
            })),
            backdrop_path: movieData.backdrop_path,
            poster_path: movieData.poster_path,
            budget: movieData.budget,
            original_title: movieData.original_title,
            overview: movieData.overview,
            release_date: movieData.release_date,
            runtime: movieData.runtime,
            status: movieData.status,
            title: movieData.title,
            revenue: movieData.revenue,
            vote__count: movieData.vote_count,
            vote_average: movieData.vote_average,
            tagline: movieData.tagline
        };
    }
    catch (error) {
        console.error('Error fetching movie:', error);
        return null;
    }
}
//# sourceMappingURL=getMovie.js.map