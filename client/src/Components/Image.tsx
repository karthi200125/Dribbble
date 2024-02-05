import { useEffect, useState } from 'react';
import blur from '../assets/blur.jpg';

interface ImageProps {
    src: string;    
    imgclass?: string;
}

const Image = ({ src,imgclass }: ImageProps) => {
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        const image = new window.Image();
        image.onload = () => {
            setImageLoading(true);
        };
        image.src = src;
    }, [src]);

    return (
        <>
            {!imageLoading && (
                <img src={blur} alt="" className={`${imgclass} object-cover`} loading='lazy' />
            )}
            {imageLoading && (
                <img src={src} alt="" className={`${imgclass} object-cover`} loading='lazy' />
            )}
        </>
    );
};

export default Image;
