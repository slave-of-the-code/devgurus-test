import React from 'react';
import './PhotoDetail.css';

const PhotoDetail = ({
  id,
  title,
  thumbnail,
  description,
  genres,
  raitingAverage,
  datePremier,
  language
}) => {
  return (
    <article className="photo-detail">
      <div className="container-photo">
        <img src={thumbnail} alt={title}></img>
        <ul>
          {genres?.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <h1 className="raiting">{raitingAverage}</h1>
        <small>{raitingAverage !== '' && <em>raiting</em>}</small>
      </div>
      <div className="container-detail">
        <h2 className="title">{title}</h2>
        <hr />
        <div className="detail">
          <p>{description}</p>
          <div className="date-language">
            <div>
              <strong>Date Premier </strong>
              <span>{datePremier}</span>
            </div>
            <div>
              <strong>Language </strong>
              <span>{language}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

PhotoDetail.propTypes = {};

export default PhotoDetail;
