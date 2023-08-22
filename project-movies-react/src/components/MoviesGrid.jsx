import { useEffect, useState } from 'react'
import { get } from '../utilities/httpClient'
import { MovieCard } from './MovieCard'
import stylesMoviesGrid from "./MoviesGrid.module.css"


export function MoviesGrid() {
    const [movies,setMovies] = useState([]);
    
    useEffect(()=>{
        get("/discover/movie").then((data) => {
            setMovies(data.results);
        });
    }, []);

    return(
        <ul className={stylesMoviesGrid.MoviesGrid}>
            {movies.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
            ))}
        </ul>
    )
}