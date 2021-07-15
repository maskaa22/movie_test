import {Component} from "react";

export default function MovieInfo ({item})
{

        return (
            <div className="movie-items">
                <hr/>
                <div>Дата релиза {item.release_date}</div>
                <div>Популярность - {item.popularity}</div>
                <div>Описание {item.overview}</div>
            </div>
        )

}