import React from 'react';
// import PropTypes from 'prop-types';

import './PhotoItem.css';
import { Link } from 'react-router-dom';

const PhotoItem = ({ id, thumbnail, description }) => {
  return (
    <>
      <li className="photo-item" key={id}>
        <div className="photo-item-img">
          <img src={thumbnail} alt=""></img>
        </div>
        <div className="photo-item-desc">
          <p>{description}</p>
          <div>
            <Link to={`/photo/${id}`}>
              <button>show more...</button>
            </Link>
          </div>
        </div>
      </li>
    </>
  );
};

PhotoItem.propTypes = {};

export default PhotoItem;
