import {useEffect, useState} from "react";
import {getMovies} from "../../servises/moviesApi/MoviesApi";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from '../moviesListCard/MoviesListCard'
import './../style/Style.css';
import {setCurrentPage, setMoviesType} from "../../servises/redusers/actionCreators/ActionCreator";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MoviInfo from "../pages/MoviInfo";

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

// const [counter, setCounter] = useState([]);
//     const funcCounter = ()=> {
//
//         for (let i = 0; i < 21; i++) {
//
//             setCounter(i)
//         }
//     }

    return(
        <div>
            <div className="glavna">
                <Router>
                    <Switch>
                        <Route path={'/films/movieInfo'}>
                            <MoviInfo items={moviList}/>
                        </Route>

                <div>
                    <a href="/films/movieInfo">
                        <div>
                            <div className="card">
                                {
                                    moviList.map(val => <div>
                                        <div><MoviesListCard key={val.id} item={val}/></div>

                                    </div>)
                                }

                            </div>
                        </div>
                    </a>
                </div>


                <div className="pages">
                    {
                        pages.map((page, index) =>
                            <span key={index} className={currentPage == page ? "current-page" : "page"} onClick={() => {
                                //console.log(page);
                                dispatch(setCurrentPage(page))

                            }
                            }>{page}</span>)
                    }
                </div>

            </Switch>
        </Router>
            </div>

        </div>
    );
}