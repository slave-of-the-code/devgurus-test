import React from 'react';

import './Error.css';

const Error = ({ error }) => {
  return (
    <div>
      <h1>Error</h1>
      <pre>{error}</pre>
    </div>
  );
};

Error.propTypes = {};

export default Error;
