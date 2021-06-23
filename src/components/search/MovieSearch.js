import react, { useState } from "react";
import "../../css/MovieSearch.css";

function MovieSearch(props) {
  console.log(props.movie);
  return (
    <div className="box">
      <img className="search-movie-card-poster" src={props.movie.Poster} />
      <div className="search-movie-card-text">
        <p className="movie-search-title">{props.movie.Title}</p>
        <p className="movie-search-year">{props.movie.Year}</p>
      </div>
    </div>
  );
}

export default MovieSearch;
