import {useEffect, useState} from "react";


function toDataURL(url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
        const reader = new FileReader();
        reader.onloadend = function () {
            callback(reader.result);
        }
        reader.readAsDataURL(xhr.response);
    };
    xhr.open('GET', url);
    xhr.responseType = 'blob';
    xhr.send();
}

const useProgressiveImage = (src, placeholder) => {
    const [sourceLoaded, setSourceLoaded] = useState(placeholder);
    useEffect(() => {
        toDataURL(src, (dataUrl) => {
            setSourceLoaded(dataUrl);
        });
    }, [src]);
    return sourceLoaded;
};

export default useProgressiveImage;