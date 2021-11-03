import react, { useEffect, useState } from "react";
import "../css/ShowMovie.css";

function ShowMovie(props) {
  const [title, setTitle] = useState([]);
  const [episode, setEpisodes] = useState();
  useEffect(() => {
    fetchEpisodeData();
    fetchTitleData();
  }, []);

  const fetchTitleData = () => {
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
        setTitle(response);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const fetchEpisodeData = () => {
    fetch(`https://frecar-epguides-api-v1.p.rapidapi.com/${props.name}/`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "frecar-epguides-api-v1.p.rapidapi.com",
        "x-rapidapi-key": "be8fdcd51fmshfe9bee8fdbbb816p1b9c3fjsne461759f5711",
      },
    })
      .then((response) => response.json())
      .then((episodes) => setEpisodes(Object.entries(episodes)))
      .catch((err) => console.error(err));
  };

  const addTitle = () => {
    console.log(episode);
    let postObj = {
      actors: title.Actors,
      awards: title.Awards,
      country: title.Country,
      director: title.Director,
      genre: title.Genre,
      language: title.Language,
      metascore: title.Metascore,
      plot: title.Plot,
      poster: title.Poster,
      rated: title.Rated,
      released: title.Released,
      runtime: title.Runtime,
      name: title.Title,
      kind: title.Type,
      writer: title.Writer,
      year: title.Year,
      imdbID: title.imdbID,
      imdbRating: title.imdbRating,
      imdbVotes: title.imdbVotes,
      totalSeasons: title.totalSeasons,
    };
    fetch("http://localhost:3000/titles", {
      method: "POST",
      body: JSON.stringify(postObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div className="show-movie-container">
      <div className="show-poster-div">
        <img src={title.Poster} />
      </div>
      <div className="show-movie-info-div">
        <div className="movie-info-one">
          <h2>{title.Title}</h2>
          <h4>Director: {title.Director}</h4>
          <p>Writer(s): {title.Writer}</p>
          <p>Cast: {title.Actors}</p>
          <p>Awards: {title.Awards}</p>
        </div>
        <div className="movie-info-two">
          <p>Rating: {title.Rated}</p>
          <p>Genre(s): {title.Genre}</p>
          <p>Runtime: {title.Runtime}</p>
          <p>Release Date: {title.Released}</p>
          <p>IMDB Rating: {title.imdbRating}</p>
        </div>
        <p>Plot: {title.Plot}</p>
      </div>
      <button onClick={addTitle}>Add To Watch List</button>
    </div>
  );
}

export default ShowMovie;
