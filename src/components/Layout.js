import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";

import "./Main.css";
import "./Footer.css";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="main">
        <h1>main</h1>
      </main>
      <footer className="footer">
        <p>
          <a href="https://www.linkedin.com/in/gustavoml/">Gustavo Lopez</a>
          <strong>copyright</strong>
          <em>{new Date().getFullYear()}</em>
        </p>
      </footer>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
