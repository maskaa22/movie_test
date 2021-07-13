import './../style/Style.css';
export default function Movie ({item})
{
    const baseURLImage = 'https://image.tmdb.org/t/p/';
    return(
        <div className="wraper">

            <div className="movies_card">

                {
                    item.poster_path==null ? <img src={''} alt="card-image"/> :
                        <img src={`${baseURLImage}/w300/${item.poster_path}`} alt="card-image"/>
                }
                <div className="ti">{item.original_title}</div>
                <div>{item.overview}</div>
                <div>{item.release_date}</div>
                <hr/>
            </div>

        </div>
    );
}