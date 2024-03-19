
const ImageUplaod = ({ onImage }: any) => {
    
    const handleImageChange = (event: any) => {
        const file = event.target.files?.[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);            
            onImage({ imageUrl, file })
        }
    };
    
    return (
        <div className="flex items-center justify-start gap-10 flex-col w-full h-full">
            <h1 className="text-2xl md:text-3xl text-center font-bold">What have you been working on?</h1>
            <input type="file" id="drop" className="hidden" accept="image/*" onChange={handleImageChange} />
            <label htmlFor="drop" className="w-[90%] md:w-[55%] h-[100%] md:h-[90%] rounded-md flex items-center justify-center cursor-pointer border-[1px] border-dotted border-neutral-200 flex-col gap-5">
                <img src="https://cdn.dribbble.com/assets/packs/media/assets/images/picture-placeholder-663241b1d5d22ee9abbe41bf9dd724df.png"
                    alt=""
                    className="w-[60px] h-[80px] object-cover"
                />
                <p>Drag and drop an image, or Browse</p>
                <p className="text-center">Minimum 1600px width recommended. Max 10MB each (20MB for videos)</p>
            </label>
        </div>
    )
}

export default ImageUplaod