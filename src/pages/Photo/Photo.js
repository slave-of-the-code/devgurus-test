import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchMovieById } from '../../hooks/useFetchMovies';
import PhotoDetail from '../../components/PhotoDetail/PhotoDetail';
import Error from '../Error/Error';

import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Photo = (props) => {
  let params = useParams();
  const id = parseInt(params.id);

  const loadingHtml = () => {
    return (
      <>
        <div className="loading">
          <h3>loading</h3>
          <FontAwesomeIcon icon={faSpinner} size="3x" spin />
        </div>
      </>
    );
  };

  const { data, loading, messageError } = useFetchMovieById(id);

  return messageError ? (
    <Error error={messageError} />
  ) : (
    <div>
      {loading ? (
        loadingHtml()
      ) : (
        <>
          <PhotoDetail {...data} />
        </>
      )}
    </div>
  );
};

PhotoDetail.propTypes = {};

export default Photo;
