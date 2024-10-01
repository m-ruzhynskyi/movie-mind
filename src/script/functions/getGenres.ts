import IGenre from "../interfaces/IGenre.js";

interface IGenreResponse {
  genres: IGenre[];
}

const API_URL = 'https://api.themoviedb.org/3/genre/movie/list?language=en';
const AUTH_TOKEN = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjY5NzQ5NmM4MjJjNDhlOGRmYmM2OTA4NjRiMWJmNCIsIm5iZiI6MTcyNzM0MjYxMy4yNjA0NTksInN1YiI6IjY2ZWFkNzBlMWJlY2E4Y2UwN2QzNzkwZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.haUXTF6a-Y1bN5H_2s3NZ5ricNhvTp5TyQJ-HrHXLQY';

export default async function fetchGenres(): Promise<IGenre[]> {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: AUTH_TOKEN,
      },
    });

    if (!response.ok) throw new Error(`Error fetching genres: ${response.statusText}`);
    const data: IGenreResponse = await response.json();
    return data.genres;
  } catch (error) {
    console.error("Error fetching genres:", error);
    return [];
  }
}
