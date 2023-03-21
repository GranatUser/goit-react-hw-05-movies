import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, instancePathPoster, cap } from "API/api";
import CastReviewSceleton from "../CastReviewSceleton/CastReviewSceleton";
export default function Cast() {
    const [cast, setCast] = useState([]);
    const { id } = useParams();
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        const getCast = async (id) => {
            try {
                setIsLoading(true);
                const cast = await fetchMovieCast(id);
                setCast(cast);
            }
            catch {
                setError(true);
            }
            finally {
                setIsLoading(false);
            }
        }
         getCast(id);
    }, [id]);
    
    return (
        <> {error &&<p>Oops....Something went wrong</p>}
            {isLoading && <CastReviewSceleton></CastReviewSceleton>}
           { cast.length===0 && !isLoading?
            <p>Cast are missing</p>
            :
            <ul>
                    {cast.map((actor) => 
                    <li key={actor.cast_id}>
                            <img src={actor.profile_path?(instancePathPoster + actor.profile_path):cap} alt={actor.name} width='100'/>
                            <h3>{actor.name}</h3>
                            <p>Character:{actor.character}</p>
                    </li>
                )}
            </ul>

                }  
        </>
    );

    
}