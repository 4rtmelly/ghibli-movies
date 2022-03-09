import React, { useState, useEffect } from "react";
import "./Movie.scss";
import { FaStar } from "react-icons/fa";

const moviesApi = "https://ghibliapi.herokuapp.com/films";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [id, setId] = useState([]);

  // La fonction addFavorite prends en parametre un film, où l'on récupère l'id pour le mettre dans
  // notre tableau d'ID afin de stocker dans le localStorage.
  const addFavorite = (movie) => {
    const idMovie = movie.id;
    const newId = [...id, idMovie];
    setId(newId);
    console.log(id);
  };

  // A chaque fois que notre tableau d'ID aura changé, alors on utilise
  // la méthode setItem pour stocker dans le localStorage
  useEffect(() => {
    localStorage.setItem("idMovies", JSON.stringify(id));
  }, [id]);

  useEffect(() => {
    fetch(moviesApi)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  // On effectue ici une itération sur l'ensemble du catalogue de film pour afficher la totalité des films
  // Dans le cas où l'on ajoute le film en favori en cliquant sur l'icône étoile
  // on donne a la fonction addFavorite le film ajouté
  return movies.map((movie, index) => {
    return (
      <div key={index} className="movie">
        <img className="image" src={movie.image} />
        <div className="bot-button">
          <h2 className="title"> {movie.title} </h2>
          <FaStar
            key={index}
            onClick={() => addFavorite(movies[index])}
            className="icon"
          />
        </div>
      </div>
    );
  });
};
export default Movie;
