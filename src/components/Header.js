import React, { memo } from 'react';
import PropTypes from 'prop-types';

import './Header.css';

const Header = memo(function Header(props) {
  return (
    <>
      <header className="header">
        <a
          href="https://www.devgurus.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1 className="brand">devgurus.io</h1>
        </a>
        <div>
          <button>Call API</button>
        </div>
      </header>
    </>
  );
});

Header.propTypes = {};

export default Header;
