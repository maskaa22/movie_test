import './../style/Style.css';
import PosterPreview from "../posterPreview/PosterPreview";
import StarRating from "../starsRating/StarRating";

import MoviInfo from "../pages/MoviInfo";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import MovieInfo from "../movieInfo/MovieInfo";

export default function Movie ({item})
{

    return(
        <div>
            <Router>
            <div className="wraper">
                <div className="movies_card">
                        <Link to={'/films/infoMovie'}><PosterPreview item={item}/></Link>
                    <div className="title-movie" >
                        <div>{item.original_title}</div>
                        <StarRating item={item}/>

                            <Switch>
                                <Route path={'/films/infoMovie'}>
                                    <MovieInfo item={item}/>
                                </Route>
                            </Switch>

                    </div>
                </div>
            </div>
            </Router>
        </div>
    );
}