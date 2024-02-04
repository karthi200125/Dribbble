import Button from "../../Components/Button"

const LImageSlide = () => {

    const images = [
        "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=320x399&vertical=center",
    ]

    return (
        <div className="wrapper ">
            <div className="slider">
                <div className="slidetrack">
                    {images.map((image, i) => (
                        <div className="slide relative">
                            <img key={i} src={image} alt="" className="logo-item" />
                            <div className="absolute h-[120px] bottom-0 left-0 w-full flex flex-col items-center">
                                <span className="w-full text-start text-white capitalize ml-8 font-bold">name</span>
                                <span className="w-full text-start text-white capitalize ml-8 font-bold">title</span>
                                <div className="w-full flex flex-row items-center gap-2 p-4">
                                    <Button bg="neutral-500" border="neutral-200" color="text-white" px="px-3" py="py-1">Mobile</Button>
                                    <Button bg="neutral-500" border="neutral-200" color="text-white" px="px-3" py="py-1">Ui</Button>
                                    <Button bg="neutral-500" border="neutral-200" color="text-white" px="px-3" py="py-1">Web</Button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default LImageSlide