import React, { useState, useEffect } from "react";
import "./Favorite.scss";
import { ImBin } from "react-icons/im";

const moviesApi = "https://ghibliapi.herokuapp.com/films";
const Favorite = () => {
  // On recupère les ID qui ont été Set dans le localStorage avec la méthode
  // getItem, les ID sont donc maintenant dans un tableau
  const [movies, setMovies] = useState([]);
  const [id] = useState(JSON.parse(localStorage.getItem("idMovies")));


  useEffect(() => {
    fetch(moviesApi)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
      });
  }, []);

  // On effectue ici une itération sur l'ensemble du catalogue de film pour savoir si l'id
  // enrengistrée dans le localStorage (puis dans un tableau d'ID pour pouvoir mieux en manipuler plusieurs)
  // correspondent bien à l'id d'un film, si oui alors on affiche l'image du film dans notre
  // composant favorite
  return movies.map((movie, index) => {
    for (let i = 0; i < id.length; i++) {
      if (id[i] === movie.id) {
        return (
          <div key={i} className="favorite">
            <img className="image" src={movie.image} alt={movie.title}/>
            <div className="bot-button">
              <h2 className="title"> {movie.title} </h2>
              <ImBin
                key={index}
                // onClick={() => deleteFav(movie.id)}
                className="icon"
              />
            </div>
          </div>
        );
      }
    }
  });
};

export default Favorite;
