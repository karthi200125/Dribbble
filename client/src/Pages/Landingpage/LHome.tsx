import { useEffect, useState } from "react";
import Button from "../../Components/Button";
import { Link } from "react-router-dom";

const LHome = () => {
    const lightColors = [
        '#FFEB3B',   // Yellow
        '#00BCD4',   // Cyan
        '#FF5722',   // Deep Orange
        '#8BC34A',   // Light Green
        '#673AB7',   // Deep Purple
        '#FFC107',   // Amber
        '#3F51B5',   // Indigo
        '#FF4081',   // Pink
        '#4CAF50',   // Green
        '#795548',   // Brown
        '#2196F3',   // Blue
        '#FF5252',   // Light Coral
        '#607D8B',   // Blue Gray
        '#E91E63',   // Pink
        '#009688',   // Teal
        '#9C27B0',   // Purple
        '#FF9800',   // Orange
        '#03A9F4',   // Light Blue
        '#FF7F50',   // Coral
        '#4CAF50',   // Green
    ];

    const [colorIndex, setColorIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % lightColors.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, [colorIndex]);

    const currentColor = lightColors[colorIndex];

    return (
        <div className="w-full flex items-center justify-center">
            <div className="w-[800px] flex items-center justify-center flex-col gap-8 mt-8 mb-8 md:text-center p-2">
                <div
                    // style={{ backgroundColor: `${currentColor}` }}
                    className="w-max px-5 py-2.5 rounded-full font-bold transition-colors duration-800 bg-red-200 text-center md:text-center w-[70%] px-3 py-1"
                >
                    Over 3 million ready-to-work creatives!
                </div>
                <h1 className="text-7xl text-center md:text-center text-5xl">The world’s destination for design</h1>
                <p className="text-center text-xl">
                    Get inspired by the work of millions of top-rated designers & agencies around the world.
                </p>
                <Link to='/register'>
                    <Button title="Get started" py="py-4" />
                </Link>
            </div>
        </div>
    );
};

export default LHome;
