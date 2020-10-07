import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropTypes from "prop-types";

import "./App.css";

import NotFound from "./components/NotFound";
import Photo from "./components/Photo";
import PhotoList from "./components/PhotoList";
import Layout from "./components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <>
              <h1>devgurus.com - TEST</h1>
            </>
          </Route>
          <Route path="/photo/:id">
            <>
              <Photo />
            </>
          </Route>
          <Route path="/photo">
            <>
              <PhotoList />
            </>
          </Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

App.propTypes = {};

export default App;
