import { useParams, Link, Outlet,useLocation } from "react-router-dom";
import { useEffect, useState,Suspense } from "react";
import { fetchMovieDatails, instancePathPoster } from "../../API/api";
import CastReviewSceleton from "../../components/CastReviewSceleton/CastReviewSceleton";
export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const location = useLocation();
    const backLinkHref = location.state?.from ?? "/movies";
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => { 
        const getDatails = async (id) => {
            try {
                setIsLoading(true);
                const movie = await fetchMovieDatails(id);
                setMovie(movie);
            } catch (err) {
                console.log(err);
            }
            finally {
                setIsLoading(false);
            }
        }
        getDatails(id);
    },[id])
    return (
        <main >
            <Link style={{display:'block'}} to={backLinkHref}>🠔 Go back</Link>
            {movie && 
                <>
                    <div style={{display:'flex'}}>
                        <img src={instancePathPoster+movie.poster_path} alt="" width="240" />
                        <div>
                            <h2>{movie.title}</h2>
                            <p>User score: {Math.round(Number(movie.vote_average)*10) }%</p>
                            <h3>Overview </h3>
                            <p>{movie.overview}</p>
                            <h3>Genres</h3>
                            <p>{(movie.genres.map((genre)=>genre.name)).join(" ")}</p>
                        </div>
                    </div>
                    <hr />
                     <div>
                        <h3>Additional information</h3>
                        <ul>
                            <li>
                                <Link to = "cast" state={{from:location.state?.from}}>Cast</Link>
                            </li>
                            <li>
                                <Link to = "reviews" state={{from:location.state?.from}}>Reviews</Link>
                            </li>
                        </ul>
                </div>
                <hr />
                <Suspense fallback=<CastReviewSceleton></CastReviewSceleton>>
                    <Outlet/>
                </Suspense>
                </>
            }   
            {isLoading&&<CastReviewSceleton></CastReviewSceleton>}
        </main>
    );
}