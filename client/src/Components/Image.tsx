import { useEffect, useState } from 'react';
import blur from '../assets/blur.jpg';

interface ImageProps {
    src: string | null;
    imgclass?: string;
}

const Image = ({ src, imgclass }: ImageProps) => {
    const [imageLoading, setImageLoading] = useState<boolean>(false);

    useEffect(() => {
        if (src) {
            const image = new window.Image();
            image.onload = () => {
                setImageLoading(true);
            };
            image.src = src;
        }
    }, [src]);

    return (
        <>
            {!imageLoading && (
                <img src={blur} alt="" className={`${imgclass} object-cover`} loading='lazy' />
            )}
            {imageLoading && src && (
                <img src={src} alt="" className={`${imgclass} object-cover`} loading='lazy' />
            )}
        </>
    );
};

export default Image;
