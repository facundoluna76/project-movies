import {Link} from "react-router-dom";
import stylesMovieCard from "./MovieCard.module.css"

export function MovieCard({movie}){
    const imageUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    return (
        <li className={stylesMovieCard.movieCard}>
            <Link to={"/movies/" + movie.id}>
                <img width={230}
                    height={345}
                    className={stylesMovieCard.movieImage}
                    src={imageUrl} alt={movie.title}
                />
                <div className={stylesMovieCard.movieTitle}>{movie.title}</div>
            </Link>
        </li>
    )
}