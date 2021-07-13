import axios from 'axios';
import {apiKey} from "../apiKey/ApiKey";

const axiosInstance = axios.create ({
    baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`,
    headers:{}
});
const getMovies = () => axiosInstance('');
const getMovie = (id) => axiosInstance('/' + id);

export {getMovies, getMovie}
