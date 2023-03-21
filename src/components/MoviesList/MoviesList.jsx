import { Link,useLocation } from "react-router-dom";

export function MoviesList({ movies, addPath = "" }) {
    const location = useLocation();
    return (
        <ul>
            {movies.map((movie) => {
                return (
                    <li key = {movie.id}>
                        <Link to={`${addPath+movie.id}`} state={{from:location}}>{movie.title} </Link>
                    </li>
                );
            })}
        </ul>
    );
}