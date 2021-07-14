import './../style/Style.css';
import PosterPreview from "../posterPreview/PosterPreview";
import StarRating from "../starsRating/StarRating";
export default function Movie ({item})
{

    return(
            <div className="wraper">

                <div className="movies_card">
                    <PosterPreview item={item}/>
                    <div className="title-movie">
                        <div>{item.original_title}</div>
                        <StarRating item={item}/>
                    </div>

                </div>

        </div>
    );
}