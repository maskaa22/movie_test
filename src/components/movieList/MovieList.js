import {useEffect} from "react";
import {getMovies} from "../../servises/moviesApi/MoviesApi";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from '../moviesListCard/MoviesListCard'
import './../style/Style.css';

export default function Movies ()
{
    const posts = useSelector(store=>store.moviesReducer);
    const dispatch = useDispatch();
    const fetchMovies = async ()=> {
        const data= await getMovies()
        console.log(data.data.results);

        dispatch({
            type:'SET_MOVIES',
            payload: data.data.results
        })
    }
    useEffect(()=>{
        fetchMovies()
    },[])
    return(
        <div className="card">
            {
                posts.movies.map(val=> <MoviesListCard key={val.id} item={val}/>)
            }
        </div>
    );
}