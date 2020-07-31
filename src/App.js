import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,
        Switch,
        Route
} from 'react-router-dom';
import Home from './views/Home';
import Favourites from './views/Favourites';
import Detail from './views/Detail';

export default function App () {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/favourite">
          <Favourites></Favourites>
        </Route>
        <Route path="/:id">
          <Detail></Detail>
        </Route>
        <Route path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
};
