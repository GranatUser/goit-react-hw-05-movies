import axios from "axios";
export const instancePathPoster = "https://themoviedb.org/t/p/w1280";
export const cap = "https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png"
axios.defaults.baseURL = "https://api.themoviedb.org/3";
const token = "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzViODgyYzJmYWZhYTc1M2EyYjFlNjFhZTMxYWZlMyIsInN1YiI6IjY0MThjMGNhNmEyMjI3MDBlOTc2NmYyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.HpUKoGZIk3XOJnE1mgAPzzSJnPYgOT4_k3_XM1sQUtc"
axios.defaults.headers.common["Authorization"] = token;

export const fetchMoviesTrendingOnDay = async () => {
    const responce = await axios.get('/trending/movie/day')
    return responce.data.results;
}
export const fetchMovieByKeyWords = async (keyWord) => {
    const currentKeyWord = keyWord.toLowerCase().trim();
    const responce = await axios.get('/search/movie', {
        params: {
            query: currentKeyWord,
        }
    })
    return responce.data.results;
}
export const fetchMovieDatails = async (id) => {
    const responce = await axios.get(`/movie/${id}`)
    return responce.data;
}
export const fetchMovieCast = async (id) => {
    const responce = await axios.get(`/movie/${id}/credits`)
    return responce.data.cast;
}
export const fetchMovieReviews = async (id) => {
    const responce = await axios.get(`/movie/${id}/reviews`)
    return responce.data.results;
}