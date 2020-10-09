import React from 'react';
import { useParams } from 'react-router-dom';
import { useFetchMovieById } from '../../hooks/useFetchMovies';
import PhotoDetail from '../../components/PhotoDetail/PhotoDetail';

const Photo = (props) => {
  let params = useParams();
  const id = parseInt(params.id);

  const { data } = useFetchMovieById(id);
  return (
    <>
      <PhotoDetail {...data} />
    </>
  );
};

PhotoDetail.propTypes = {};

export default Photo;
