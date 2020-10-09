import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';
import Photo from './pages/Photo/Photo';
import PhotoList from './pages/PhotoList/PhotoList';
import NotFound from './pages/NotFound/NotFound';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photo/:id" component={Photo} />
          <Route path="/photo" component={PhotoList} />
          <Route exact path="*" component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  );
};

App.propTypes = {};

export default App;
