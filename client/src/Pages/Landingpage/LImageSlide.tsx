const LImageSlide = () => {

    const images = [
        "https://cdn.dribbble.com/uploads/47172/original/d85ae8c7db2421e9a01ecac942978d4b.png?1685645079&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47174/original/4f02d72fe701b15b2168a4954332427f.png?1685645150&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47170/original/cd3266dde4f00a5d6a509c7375ddaecd.png?1685644840&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47176/original/9b22cd83bde1809976bec0722d1f8923.jpeg?1685645213&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47175/original/1fb34610061a95a007ac5e7b1dc53138.jpeg?1685645183&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47173/original/Vladimir_Gruev.png?1689174896&format=webp&resize=320x399&vertical=center",
        "https://cdn.dribbble.com/uploads/47171/original/daniele-buffa-3.png?1689174763&format=webp&resize=320x399&vertical=center",
    ]

    return (
        <div className="logoslide">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    alt=""
                    className="logo-item"
                />
            ))}
        </div>
    )
}

export default LImageSlide