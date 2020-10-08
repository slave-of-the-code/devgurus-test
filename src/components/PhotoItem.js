import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';

const PhotoItem = ({ id, thumbnail, description }) => {
  return (
    <>
      <li key={id}>
        <div>
          <img src={thumbnail} alt=""></img>
        </div>
        <div>
          {description}
          <Link to={'/photo/' + id}>
            <button>show more...</button>
          </Link>
        </div>
      </li>
    </>
  );
};

PhotoItem.propTypes = {};

export default PhotoItem;
