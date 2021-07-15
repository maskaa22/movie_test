import '../style/Style.css'
import UserInfo from "../userInfo/UserInfo";
import FilmInfo from "../filmInfo/FilmInfo";
import {BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";

export default function Header ()
{
    return(
        <div>
            <Router>
            <div className="header_top">
                <div className="logo">
                    <a href="/">
                        <img className="logo-img"
                             src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tmdb.new.logo.svg/2560px-Tmdb.new.logo.svg.png"
                             alt="Logo"/>

                    </a>
                </div>
                <div className="nav_menu">
                    <div className="nav_menu_item drop_down"><FilmInfo/></div>
                    <div className="nav_menu_item">
                        <a href="/films">Фильмы</a>
                    </div>
                    <div className="nav_menu_item"><a href="#">Еще...</a></div>
                </div>
                <div className="user-menu">
                    <div className="white_dark">
                        <a href="#"><i className="fa fa-adjust color-i" aria-hidden="true" style={{
                            width: 30, height: 30
                        }}></i></a>
                    </div>
                    <div className="drop_down">
                        <UserInfo/>
                    </div>
                    <div className="ball">
                        <a href="#"><i className="fa fa-bell color-i" aria-hidden="true" style={{
                            width: 30, height: 30
                        }}></i></a>
                    </div>
                </div>
            </div>

                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/films'} component={Movies}/>
                </Switch>
            </Router></div>
        
    );
}