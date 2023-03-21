import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "API/api";
import CastReviewSceleton from "../CastReviewSceleton/CastReviewSceleton";
export default function Reviews() {
    const [reviews, setReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const { id } = useParams();
    useEffect(() => {
        const getCast = async (id) => {
            try {
                setIsLoading(true);
                const reviews = await fetchMovieReviews(id);
                setReviews(reviews);
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
        <> 
            {error &&<p>Oops....Something went wrong</p>}
            {isLoading&&<CastReviewSceleton></CastReviewSceleton>}
            { reviews.length===0 && !isLoading?
            <p>Reviews are missing</p>
            :
            <ul>
                    {reviews.map((critic) => 
                    <li key={critic.id}>
                            <h3>Author: {critic.author}</h3>
                            <p>{critic.content}</p>
                    </li>
                )}
            </ul>

            }  
            
        </>
    );

}