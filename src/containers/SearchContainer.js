import react, { useState } from "react";
import SearchBar from "../components/search/SearchBar";
import SearchMovieContainer from "./SearchMovieContainer";

function SearchContainer() {
  const [fetchResult, setFetch] = useState();

  function fetchTitle(baseURL) {
    fetch(baseURL, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "be8fdcd51fmshfe9bee8fdbbb816p1b9c3fjsne461759f5711",
        "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((fetchResult) => setFetch(fetchResult.Search))
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <>
      <SearchBar fetch={fetchTitle} />
      <div class="container">
        <SearchMovieContainer movies={fetchResult} />
      </div>
    </>
  );
}

export default SearchContainer;
