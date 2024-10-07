import IGenre from "./IGenre.js";

export default interface IMovie {
  genres: IGenre[];
  backdrop_path: string;
  poster_path: string;
  budget: number;
  original_title: string;
  overview: string;
  release_date: string;
  runtime: number;
  status: string;
  title: string;
  revenue: number
  vote__count: number,
  vote_average: number,
  tagline: string
}