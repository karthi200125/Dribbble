// Title.js
import { useEffect } from 'react';

const Title = ({ title }: any) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};

export default Title;
