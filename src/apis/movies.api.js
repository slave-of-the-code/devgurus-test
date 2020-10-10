import { Data } from '../data/data';

export const getAllMoviesAsync = async () => {
  const { uri_api } = Data;

  const resp = await fetch(uri_api);
  const data = await resp.json();

  const movieList = data.map((item) => {
    const { show } = item;

    return {
      id: show.id,
      thumbnail: show.image?.medium,
      title: show.name,
      description: show.summary ?? '',
      genres: show.genres,
      raitingAverage: show.rating?.average ?? '',
      datePremier: show.premiered ?? '',
      language: show.language
    };
  });

  return movieList;
};

export const getMovieByIdAsync = async (id) => {
  const moviesList = await getAllMoviesAsync();
  const movie = moviesList.find((movie) => movie.id === id);
  return movie;
};
