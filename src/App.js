import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import './App.css';

import NotFound from './components/NotFound';
import Photo from './components/Photo';
import PhotoList from './components/PhotoList';
import Layout from './components/Layout';
import Main from './components/Main';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Main}></Route>
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
          <Route path="*" exact component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

App.propTypes = {};

export default App;
