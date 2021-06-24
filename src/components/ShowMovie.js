import react, { useEffect, useState } from "react";
import "../css/ShowMovie.css";

function ShowMovie(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(
      `https://movie-database-imdb-alternative.p.rapidapi.com/?i=${props.movieID}&r=json`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "be8fdcd51fmshfe9bee8fdbbb816p1b9c3fjsne461759f5711",
          "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
        },
      }
    )
      .then((response) => response.json())
      .then((response) => {
        setState(response);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="show-movie-container">
      <div className="show-poster-div">
        <img src={state.Poster} />
      </div>
      <div className="show-movie-info-div">
        <div className="movie-info-one">
        <h2>{state.Title}</h2>
          <h4>Director: {state.Director}</h4>
          <p>Writer(s): {state.Writer}</p>
          <p>Cast: {state.Actors}</p>
          <p>Awards: {state.Awards}</p>
        </div>
        <div className="movie-info-two">
          <p>Rating: {state.Rated}</p>
          <p>Genre(s): {state.Genre}</p>
          <p>Runtime: {state.Runtime}</p>
          <p>Release Date: {state.Released}</p>
          <p>IMDB Rating: {state.imdbRating}</p>
        </div>
        {/* <p>Plot: {state.Plot}</p> */}
      </div>
      {/* <p>{state.}</p>
          <p>{state.}</p>
          <p>{state.}</p>
          <p>{state.}</p>
        <p>{state.}</p> */}
        <button onClick={() => props.closeWindow()}>Close</button>
    </div>
  );
}

export default ShowMovie;
