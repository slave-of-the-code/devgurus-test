import { useEffect, useState } from 'react';
import { getAllMoviesAsync, getMovieByIdAsync } from '../apis/movies.api';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState({
    messageError: undefined,
    data: [],
    loading: true
  });

  useEffect(() => {
    getAllMoviesAsync()
      .then((moviesList) => {
        setMovies({
          data: moviesList,
          loading: false
        });
      })
      .catch((err) => {
        setMovies({
          messageError: err,
          data: [],
          loading: false
        });
      });
  }, []);

  return movies;
};

export const useFetchMovieById = (id) => {
  const [movie, setMovie] = useState({
    messageError: undefined,
    data: {},
    loading: true
  });

  useEffect(() => {
    getMovieByIdAsync(id)
      .then((movie) => {
        setMovie({
          data: movie,
          loading: false
        });
      })
      .catch((err) => {
        setMovie({
          messageError: err,
          data: {},
          loading: false
        });
      });
  }, [id]);

  return movie;
};
