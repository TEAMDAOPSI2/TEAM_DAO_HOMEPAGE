import {useState} from "react";
import noImg from "public/assets/no-img.png";

const Image = ({img}) => {
    const [image, setImage] = useState(img);
    const handleError = () => {
        setImage(noImg.src);
    }
    if (image == 'https://cdn1-v3.gamesports.net/img/themes/general/edb_player_default.jpg'){
        setImage(noImg.src);
    }
    return (
        <img src={image} onError={handleError} alt=""/>
    )
}

export default Image