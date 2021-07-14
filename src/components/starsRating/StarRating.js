
import StarsRating from "./StarsRating";
import {useState} from "react";

export default function StarRating({item}) {

    const [rating, setRating] = useState(2);

    const handleChange = (value) => {
        setRating(value);
    }

    
    return (
        <div>

            <StarsRating
                count={5}
                size={40}
                value={rating}
                activeColor ={'red'}
                inactiveColor={'#ddd'}
                onChange={handleChange}  />
        </div>
    )
}