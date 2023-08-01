import { MovieCard } from './MovieCard'
import movies from './movies.json'
import stylesMoviesGrid from "./MoviesGrid.module.css"

export function Moviesgrid() { 
    return(
        <ul className={stylesMoviesGrid.MoviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}