import react, { useState } from "react";
import { StaticRouter } from "react-router";

function SearchBar() {
  const [title, setTitle] = useState("");
  const [year, setYear] = useState("");
  const [type, setType] = useState("");
  let baseURL = "https://movie-database-imdb-alternative.p.rapidapi.com/?s=";

  function titleChangeHandler(e) {
    setTitle(e.target.value);
  }

  function yearChangeHandler(e) {
    setYear(e.target.value);
  }

  function typeChangeHandler(e) {
    setType(e.target.value);
  }

  function submitSearchHandler(e) {
    e.preventDefault();

    let encodedTitle = encodeURIComponent(title.trim());
    baseURL += encodedTitle;
    let titleOnly = "&page=1&r=json";
    let titleAndType = `&page=1&type=${type}&r=json`;
    let titleAndYear = `&page=1&y=${year}&r=json`;

    if (year === "" && type === "") {
      baseURL += titleOnly;
    }else if (year === "") {
      baseURL += titleAndType;
    } else if (type === "") {
      baseURL += titleAndYear;
    } else {
        baseURL += `&page=1&y=${year}&type=${type}&r=json`
    } 
    
    fetchTitle(baseURL)
  }

  function fetchTitle(baseURL){
      console.log(baseURL)

      fetch(baseURL, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "be8fdcd51fmshfe9bee8fdbbb816p1b9c3fjsne461759f5711",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then((response) => response.json())
.then (titles => console.log(titles))
.catch(err => {
	console.error(err);
});
  }

  return (
    <>
      <form onSubmit={submitSearchHandler}>
        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="The Dark Knight"
            value={title}
            name="title"
            onChange={titleChangeHandler}
          ></input>
        </div>
        <div>
          <label>Enter Year (optional)</label>
          <input
            type="number"
            placeholder="2008"
            value={year}
            name="year"
            onChange={yearChangeHandler}
          ></input>
        </div>
        <div>
          <label>Select Type (optional)</label>
          <select value={type} name="type" onChange={typeChangeHandler}>
            <option value="">-</option>
            <option value="movie">Movie</option>
            <option value="series">Series</option>
            <option value="episode">Episode</option>
          </select>
        </div>
        <div>
          <button placeholder="submit" type="submit">
            Go!
          </button>
        </div>
      </form>
    </>
  );
}

export default SearchBar;
