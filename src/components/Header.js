import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Header.css';
import { Data } from '../data/data';

const Header = (props) => {
  const { headerLink } = Data;

  return (
    <>
      <header className="header">
        <a
          href={headerLink.link}
          target={headerLink.isBlank ? '_blank' : ''}
          rel={headerLink.isBlank ? 'noopener noreferrer' : ''}
        >
          <h1 className="brand">{headerLink.text}</h1>
        </a>
        <div>
          <Link to="/photo">
            <button>Call API</button>
          </Link>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {};

export default Header;
