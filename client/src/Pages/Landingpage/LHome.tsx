import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";
import { COLORS } from "../../Utils/Colors";

const LHome = () => {

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % COLORS.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [colorIndex]);

    const currentColor = COLORS[colorIndex];
    
    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[800px] flex items-center justify-center flex-col gap-8 mt-8 mb-8 md:text-center p-2">
                <div
                    style={{ backgroundColor: `${currentColor}` }}
                    className="w-max px-5 py-2.5 rounded-full font-bold transition-colors duration-800 text-center "
                >
                    Over 3 million ready-to-work creatives!
                </div>
                <h1 className="text-5xl md:text-7xl text-center md:text-center ">The world’s destination for design</h1>
                <p className="text-center text-xl">
                    Get inspired by the work of millions of top-rated designers & agencies around the world.
                </p>
                <Link to='/register'>
                    <Button py="py-4" >Get started</Button>
                </Link>
            </div>
        </div>
    );
};

export default LHome;
