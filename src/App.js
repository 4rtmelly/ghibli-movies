import React from "react";

import "./App.scss";
import Movie from "./Components/Movie";
import Favorite from "./Components/Favorite";
import { MdLocalMovies } from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <div className="header">
          <div className="header-link">
            <Link style={{ color: 'CornflowerBlue', textDecoration: 'inherit'}}to="/"><MdLocalMovies/> Films</Link>
          </div>
          <div className="header-link">
            <Link style={{ color: 'CornflowerBlue', textDecoration: 'inherit'}} to="/favorite"><FaStar/> Favorites</Link>
          </div>
        </div>

        <Switch>
          <Route path="/favorite">
            <div className="all-movies">
              <Favorite />
            </div>
          </Route>

          <Route path="/">
            <div className="all-movies">
              <Movie />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
