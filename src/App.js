import React, { useState, useEffect } from "react";

import "./App.scss";
import Movie from "./Components/Movie";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


function App() {

  return (
    <div className="wrapper">
      <Router>
        <div className="header">
          <div className="header-link">
            <Link to="/">LISTE DE FILMS</Link>
          </div>
          <div className="header-link">
            <Link to="/favorite">FILMS PREFERES</Link>
          </div>
        </div>
      </Router>

      <div className="all-movies">
        <Movie />
      </div>
    </div>
  );
}

export default App;
