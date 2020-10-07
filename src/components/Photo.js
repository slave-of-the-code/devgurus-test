import React from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";

const Photo = (props) => {
  console.log(props);
  let params = useParams();
  console.log(params);
  return (
    <>
      <h1>Gustavo Lopez</h1>
    </>
  );
};

Photo.propTypes = {};

export default Photo;
