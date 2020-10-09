import { useEffect, useState } from 'react';
import { getAllMoviesAsync } from '../apis/movies.api';

export const useFetchMovies = () => {
  const [movies, setMovies] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getAllMoviesAsync().then((moviesList) => {
      //   setTimeout(() => {
      setMovies({
        data: moviesList,
        loading: false
      });
      //   }, 3000);
    });
  }, []);

  return movies;
};

export const useFetchMovieById = (id) => {
  const [movie, setMovie] = useState({
    data: {},
    loading: true
  });

  useEffect(() => {
    getAllMoviesAsync().then((moviesList) => {
      //   setTimeout(() => {
      setMovie({
        data: moviesList.find((mov) => mov.id === id),
        loading: false
      });
      //   }, 3000);
    });
  }, [id]);

  return movie;
};
