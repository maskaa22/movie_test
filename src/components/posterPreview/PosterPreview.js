
export default function PosterPreview ({item})
{
    const baseURLImage = 'https://image.tmdb.org/t/p/';
    return(
        <div>

                    {
                        item.poster_path == null ? <img src={''} alt="card"/> :
                            <img className="img-poster" src={`${baseURLImage}/w300/${item.poster_path}`} alt="card"/>
                    }


        </div>
    );
}