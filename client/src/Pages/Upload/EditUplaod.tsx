import { useState } from "react";
import { CiImageOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { LuGalleryHorizontal } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import Input from "../../Components/Inputs";

interface EditUploadProps {
  image: string;
  onBaropen: any;
}

const EditUpload = ({ image, onBaropen }: EditUploadProps) => {
  const [barOpen, setBarOpen] = useState(false);
  const [input, setInput] = useState({
    proTitle: '',
    proDesc: "",
    proImage: "https://cdn.dribbble.com/userupload/12800480/file/original-83091a66329bfffa0249884917126b32.png?resize=320x240&vertical=center"
  })

  const handleBaropen = () => {
    setBarOpen(!barOpen)
    onBaropen(!barOpen)
  }

  const handlechange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <div className={`w-full h-screen flex items-center justify-start flex-col gap-5`}>
      <div className="top w-[1050px] flex items-center flex-col gap-3">
        <input
          type="text"
          placeholder="Give me name"
          className="text-4xl w-[70%] font-bold h-[100px] bg-transparent"
          onChange={handlechange}
        />
        <img
          src={image}
          alt=""
          className="w-full h-[500px] object-cover rounded-lg"
        />
        <Input name="proDesc" placeholder="write what inti thid design or add any details you like mention" onChange={handlechange} value={input.proDesc} />
      </div>

      <div className="relative w-full h-[2px] bg-neutral-300 mt-10">
        <span
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-20 py-3 rounded-full flex flex-row gap-3 items-center bg-white border-[1px] border-solid border-neutral-200 cursor-pointer"
          onClick={handleBaropen}
        >
          <FaPlus />
          insert Block
        </span>
      </div>

      {
        barOpen && (
          <div className={`fixed ${barOpen ? "right-[0%]" : "right-[-30%]"} top-0 h-screen w-[350px] p-8 transition-all duration-300 bg-white shadow-xl flex gap-7 flex-col`}>
            <span onClick={handleBaropen} className="cursor-pointer font-light hover:opacity-50">close</span>
            <h1 className="text-xl font-bold">Insert Block</h1>
            <div className="flex items-start justify-center flex-col gap-4 ">
              <h2>Basic</h2>
              <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer"><RxText size={25} /><span>Text</span></div>
              <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer"><CiImageOn size={25} /><span>Image</span></div>
              <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer"><GoVideo size={25} /><span>Video</span></div>
            </div>
            <div className="flex items-start justify-center flex-col gap-4 mt-5">
              <h2>Rich media</h2>
              <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer"><LuGalleryHorizontal size={20} /><span>Gallery</span></div>
            </div>
            <div>

            </div>
          </div>
        )
      }
    </div >
  );
};

export default EditUpload;
