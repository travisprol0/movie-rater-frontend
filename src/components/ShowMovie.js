import react, { useEffect, useState } from "react";

function ShowMovie(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(`https://movie-database-imdb-alternative.p.rapidapi.com/?i=${props.movieID}&r=json`, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "be8fdcd51fmshfe9bee8fdbbb816p1b9c3fjsne461759f5711",
		"x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com"
	}
})
.then(response => response.json())
.then(response => {
	setState(response);
})
.catch(err => {
	console.error(err);
});
  }, []);
  return <h1>{state.Title}</h1>;
}

export default ShowMovie;
