import {useState} from "react";

export default function FilmInfo ()
{
    const [flag, setFlag] = useState(false);
    const hoverUser=flag? 'active-film': 'pacive-film';
    const onFlagHoverUser=()=>setFlag(!flag);
    return(
        <div>
            <a  onClick={()=>{onFlagHoverUser()}}>
                Фильмы</a>
            <div className={hoverUser}>
                <div className="drop_down_item"><a href="#">Жанры</a></div>
                <div className="drop_down_item"><a href="#">Актёры</a></div>
            </div>
        </div>
    );
}