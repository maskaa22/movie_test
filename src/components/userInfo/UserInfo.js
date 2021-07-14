import {useState} from "react";

export default function UserInfo ()
{
    const [flag, setFlag] = useState(false);
    const hoverUser=flag? 'active-user': 'pacive-user';
    const onFlagHoverUser=()=>setFlag(!flag);
    return(
        <div>
            <a  onClick={()=>{onFlagHoverUser()}}>
                <i className="fa fa-user-circle color-i" aria-hidden="true" style={{width: 30, height: 30
                }}></i></a>
            <div className={hoverUser}>
                <div className="drop_down_item"><a href="#">Профиль</a></div>
                <div className="drop_down_item"><a href="#">Параметры</a></div>
            </div>
        </div>
    );
}