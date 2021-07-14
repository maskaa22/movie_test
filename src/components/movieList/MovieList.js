import {useEffect} from "react";
import {getMovies} from "../../servises/moviesApi/MoviesApi";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from '../moviesListCard/MoviesListCard'
import './../style/Style.css';
import {setCurrentPage, setMoviesType} from "../../servises/redusers/actionCreators/ActionCreator"

export default function Movies ()
{
    const totalCount = useSelector(store=>store.moviesReducer.totalCount);
    const currentPage = useSelector(store=>store.moviesReducer.currentPage);
    const perPage = useSelector(store=>store.moviesReducer.perPage);
//console.log(currentPage);
    const pages =[1,2,3,4,5]

    const moviList = useSelector(store=>store.moviesReducer.movies);
    const dispatch = useDispatch();
    const fetchMovies = async (currentPage)=> {
        const data= await getMovies(currentPage)
        //console.log(data.data);

        dispatch(setMoviesType(data.data.results))
    }
    useEffect(()=>{
        fetchMovies(currentPage)
    },[])
    return(
        <div className="glavna">
            <div>
                <div className="card">
                    {
                        moviList.map(val => <MoviesListCard key={val.id} item={val}/>)
                    }
                </div>
            </div>
            <div className="pages">
                {
                    pages.map((page, index)=>
                        <span key={index} className={currentPage==page?"current-page":"page"} onClick={()=>{
                            //console.log(page);
                            dispatch(setCurrentPage(page))

                        }
                        }>{page}</span>)
                }
            </div>
        </div>
    );
}