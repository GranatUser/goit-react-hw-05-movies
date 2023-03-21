import { MoviesList } from "components/MoviesList/MoviesList";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieByKeyWords } from "../../API/api";
import CastReviewSceleton from "../../components/CastReviewSceleton/CastReviewSceleton";
export default function Movies() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchParams, setSearchParams] = useSearchParams();
    const moviesName = searchParams.get("keyWord") ?? "";
    const handleSubmit = (event) => {
        event.preventDefault();
        if (event.currentTarget.elements.film.value === "") return;
        setSearchParams({ keyWord: event.currentTarget.elements.film.value });
    }
    useEffect(() => {
        if (moviesName === "") return;
        async function getMovies(moviesName) {
            try {
                setIsLoading(true);
                const movies = await fetchMovieByKeyWords(moviesName);
                setMovies(movies);
            }
            catch(error)  {
                console.log(error);
            }
            finally {
                setIsLoading(false);
            }
        }
        getMovies(moviesName);
    },[moviesName]);
    return (
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="film"/>
                <button type="submit">Search</button>
            </form>
           {!isLoading&&<MoviesList movies={movies}></MoviesList>} 
           {isLoading&&<CastReviewSceleton></CastReviewSceleton>}
        </main>
    );
}