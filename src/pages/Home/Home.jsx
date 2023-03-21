import { fetchMoviesTrendingOnDay } from "API/api";
import { useEffect, useState } from "react";
import { MoviesList } from "components/MoviesList/MoviesList";
export default function Home() {
    const [movies, setMovies] = useState([]);
      const [error, setError] = useState(null);
    useEffect(() => {
        const getMovies = async () => {
        try {
            const movies = await fetchMoviesTrendingOnDay();
            setMovies(movies);
        } catch (err) {
            setError(true);
        }
       }
        getMovies();
    }, [])
    
    return (
        <main>
            <h1>
                Trending today
            </h1>
            <MoviesList addPath="movies/" movies={movies}></MoviesList>
            {error&& <p>Oops...Something went wrong</p>}
        </main>
    );
}