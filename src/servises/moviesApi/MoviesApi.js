import axios from 'axios';
import {apiKey} from "../apiKey/ApiKey";


const axiosInstance = axios.create ({
    baseURL: `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=`,
    headers:{}
});
//const getMovies = () => axiosInstance('');

const getMovies = (currentPage) => axiosInstance(''+currentPage);
//const getPage = (currentPage, perPage) => axiosInstance(''+currentPage+'&total_pages='+perPage);
export {getMovies}

