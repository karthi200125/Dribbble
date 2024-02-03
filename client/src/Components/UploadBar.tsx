
const UploadBar = ({ per }: any) => {
    const progressPercentage = Math.floor((per / 100) * 100);

    return (
        <>
            <div className="w-full border border-solid border-gray-300 rounded-lg overflow-hidden">
                <div
                    className={`h-[10px] bg-${progressPercentage === 100 ? 'green-500' : 'blue-500'} transition-all duration-300`}
                    style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>
            <p className={`text-${progressPercentage === 100 ? 'green-500' : 'blue-500'}`}>{`File uploaded ${progressPercentage}% Completed`}</p>
        </>
    );
};

export default UploadBar;
