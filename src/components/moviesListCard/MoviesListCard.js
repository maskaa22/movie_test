import './../style/Style.css';
import PosterPreview from "../posterPreview/PosterPreview";
export default function Movie ({item})
{

    return(
        <div className="wraper">

            <div className="movies_card">
                <PosterPreview item={item}/>
                <div className="ti">{item.original_title}</div>
                <div>{item.overview}</div>
                <div>{item.release_date}</div>
                <hr/>
            </div>

        </div>
    );
}