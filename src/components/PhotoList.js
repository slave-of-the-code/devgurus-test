import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
import { Data } from '../data/data';
import PhotoItem from './PhotoItem';
import './PhotoList.css';

const PhotoList = () => {
  const { uri_api } = Data;

  const [show, setShow] = useState([]);

  useEffect(() => {
    callAPI();
  });

  const callAPI = async () => {
    const resp = await fetch(uri_api);
    const data = await resp.json();
    // console.log(data);

    const showList = data.map((item) => {
      const { show } = item;
      return {
        id: show.id,
        thumbnail: show.image.medium,
        title: show.name,
        description: show.summary ?? ''
      };
    });
    //console.log(showList);

    setShow(showList);
  };

  // callAPI();

  return (
    <div>
      <ul className="photo-list">
        {show.map((data, i) => (
          <PhotoItem key={i} {...data} />
        ))}
      </ul>
    </div>
  );
};

PhotoList.propTypes = {};

export default PhotoList;
