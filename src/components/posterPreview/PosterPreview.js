
export default function PosterPreview ({item})
{
    const baseURLImage = 'https://image.tmdb.org/t/p/';
    return(
        <div>
            {
                item.poster_path==null ? <img src={''} alt="card-image"/> :
                    <img src={`${baseURLImage}/w300/${item.poster_path}`} alt="card-image"/>
            }
        </div>
    );
}