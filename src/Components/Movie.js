import React, { useState, useEffect } from "react";
import "./Movie.scss";
import { FaStar } from "react-icons/fa";

const moviesApi = "https://ghibliapi.herokuapp.com/films";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(moviesApi)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  return movies.map((movie, index) => {
    return (
      <div key={index} className="movie">
        <img className="image" src={movie.image} />
        <div className="bot-button">
          <h2 className="title"> {movie.title} </h2>
           <FaStar onClick={() => {console.log("ieka")}} className="icon" />
        </div>
      </div>
    );
  });
};
export default Movie;
