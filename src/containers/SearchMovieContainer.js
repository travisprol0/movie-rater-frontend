import react from 'react'
import MovieSearch from '../components/search/MovieCard'

function SearchMovieContainer (props) {
    if (props.movies == undefined){
        return null;
    } else {
        props.movies.pop()

        return (
                props.movies.map((movie) => (
                        <MovieSearch key={movie.imdbID} id={movie.imdbID} movie={movie} />
                  ))
        )
    }
}

export default SearchMovieContainer