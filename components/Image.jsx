import {useState} from "react";
import noImg from "public/assets/no-img.png";

const Image = ({img}) => {
    const [image, setImage] = useState(img);
    const handleError = () => {
        setImage(noImg.src);
    }
    return (
        <img src={image} onError={handleError} alt=""/>
    )
}

export default Image