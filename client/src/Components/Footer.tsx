import FooterBtm from "./FooterBtm";

const Footer = () => {

  const images = [

    { name: 'webdesign', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center" },
    { name: 'Animation', img: "https://cdn.dribbble.com/userupload/12750071/file/original-65ae2a13dd4bc4fae01e13e48d31b68b.jpg?crop=27x164-1735x1445&format=webp&resize=200x150&vertical=center", },
    { name: 'print', img: "https://cdn.dribbble.com/userupload/12803821/file/original-5198e7dfd68dac50167ab568b6d209f0.jpg?format=webp&resize=200x150&vertical=center", },
    { name: 'Mobile', img: "https://cdn.dribbble.com/userupload/12837093/file/original-df8c866aa6fbd96a56047705d4e69cb3.png?format=webp&resize=200x150&vertical=center", },
    { name: 'Branding', img: "https://cdn.dribbble.com/userupload/12772694/file/original-2e808c54bbd340d949ca1055a5cfe776.png?crop=0x0-2000x1500&format=webp&resize=200x150&vertical=center", },
    { name: 'illustration', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center", },
    { name: 'Prosuct design', img: "https://cdn.dribbble.com/userupload/12669847/file/still-6c72e7d42d8b6b25ef94df6eecaeea80.gif?format=webp&resize=200x150&vertical=center", },
    { name: 'typcography', img: "https://cdn.dribbble.com/userupload/12869761/file/original-9b32d7ff82ccc432a23a06946493433c.png?crop=40x30-1560x1170&format=webp&resize=200x150&vertical=center", },
    { name: 'webdesign', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center" },
    { name: 'Animation', img: "https://cdn.dribbble.com/userupload/12750071/file/original-65ae2a13dd4bc4fae01e13e48d31b68b.jpg?crop=27x164-1735x1445&format=webp&resize=200x150&vertical=center", },
    { name: 'print', img: "https://cdn.dribbble.com/userupload/12803821/file/original-5198e7dfd68dac50167ab568b6d209f0.jpg?format=webp&resize=200x150&vertical=center", },
    { name: 'Mobile', img: "https://cdn.dribbble.com/userupload/12837093/file/original-df8c866aa6fbd96a56047705d4e69cb3.png?format=webp&resize=200x150&vertical=center", },
    { name: 'Branding', img: "https://cdn.dribbble.com/userupload/12772694/file/original-2e808c54bbd340d949ca1055a5cfe776.png?crop=0x0-2000x1500&format=webp&resize=200x150&vertical=center", },
    { name: 'illustration', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center", },
    { name: 'Prosuct design', img: "https://cdn.dribbble.com/userupload/12669847/file/still-6c72e7d42d8b6b25ef94df6eecaeea80.gif?format=webp&resize=200x150&vertical=center", },
    { name: 'typcography', img: "https://cdn.dribbble.com/userupload/12869761/file/original-9b32d7ff82ccc432a23a06946493433c.png?crop=40x30-1560x1170&format=webp&resize=200x150&vertical=center", },
    { name: 'webdesign', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center" },
    { name: 'Animation', img: "https://cdn.dribbble.com/userupload/12750071/file/original-65ae2a13dd4bc4fae01e13e48d31b68b.jpg?crop=27x164-1735x1445&format=webp&resize=200x150&vertical=center", },
    { name: 'print', img: "https://cdn.dribbble.com/userupload/12803821/file/original-5198e7dfd68dac50167ab568b6d209f0.jpg?format=webp&resize=200x150&vertical=center", },
    { name: 'Mobile', img: "https://cdn.dribbble.com/userupload/12837093/file/original-df8c866aa6fbd96a56047705d4e69cb3.png?format=webp&resize=200x150&vertical=center", },
    { name: 'Branding', img: "https://cdn.dribbble.com/userupload/12772694/file/original-2e808c54bbd340d949ca1055a5cfe776.png?crop=0x0-2000x1500&format=webp&resize=200x150&vertical=center", },
    { name: 'illustration', img: "https://cdn.dribbble.com/userupload/12816760/file/original-11ff9ef8b5ee98bcf91338158da4e096.jpg?crop=0x0-2800x2100&format=webp&resize=200x150&vertical=center", },
    { name: 'Prosuct design', img: "https://cdn.dribbble.com/userupload/12669847/file/still-6c72e7d42d8b6b25ef94df6eecaeea80.gif?format=webp&resize=200x150&vertical=center", },
    { name: 'typcography', img: "https://cdn.dribbble.com/userupload/12869761/file/original-9b32d7ff82ccc432a23a06946493433c.png?crop=40x30-1560x1170&format=webp&resize=200x150&vertical=center", },
  ]

  return (
    <div className="w-full py-[30px] flex items-center flex-col gap-10 ">

      <div className="sldiing h-[220px] overflow-hidden">
        <div className="slider">
          <div className="slidetrack">
            {images.map((item, i) => (
              <div className="">
                <div className="slide slidebtm relative h-[200px] overflow-hidden ">
                  <img key={i} src={item.img} alt="" style={{height:"200px" , width:"200px"}} className="logo-item h-[150px] object-contain" />
                </div>
                <span className="mt-5 font-bold">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FooterBtm />
    </div>
  )
}

export default Footer