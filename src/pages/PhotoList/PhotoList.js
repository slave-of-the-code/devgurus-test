import React from 'react';
import { useFetchMovies } from '../../hooks/useFetchMovies';
// import PropTypes from 'prop-types';

import PhotoItem from '../../components/PhotoItem/PhotoItem';
import './PhotoList.css';
import Error from '../Error/Error';

const PhotoList = () => {
  const loadingHtml = () => {
    return (
      <>
        <div className="loading">
          <h3>loading...</h3>
        </div>
      </>
    );
  };

  const { data: moviesList, loading, messageError } = useFetchMovies();

  return messageError ? (
    <Error error={messageError} />
  ) : (
    <div>
      {loading && loadingHtml()}
      <ul className="photo-list">
        {moviesList.map((data, i) => (
          <PhotoItem key={i} {...data} />
        ))}
      </ul>
    </div>
  );
};

PhotoList.propTypes = {};

export default PhotoList;
