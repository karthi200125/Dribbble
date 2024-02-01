import React, { useState } from "react";
import Button from "../../Components/Button";
import ImageUplaod from "./ImageUplaod";
import EditUplaod from "./EditUplaod";
import useHandleCrud from "../../Utils/HanldeCrud";
import { useSelector } from "react-redux";
import Input from "../../Components/Inputs";
import { FaPlus } from "react-icons/fa";
import { RxText } from "react-icons/rx";
import { CiImageOn } from "react-icons/ci";
import { GoVideo } from "react-icons/go";
import { LuGalleryHorizontal } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const [image, setImage] = useState("");
  const [barOpen, setBarOpen] = useState(false);
  const navigate = useNavigate()

  const { user } = useSelector((state: any) => state.user);

  const [input, setInput] = useState({
    proTitle: "",
    proDesc: "",
    proImage:
      "https://cdn.dribbble.com/userupload/12802575/file/original-fd7d568834b4588fe9c2997b37524080.png?resize=320x240&vertical=center",
  });

  const handleBaropen = () => {
    setBarOpen(!barOpen);
  };

  const handlechange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleImageChange = (imageUrl: any) => {
    setImage(imageUrl);
  };

  console.log(user)

  const { isLoading, Crud } = useHandleCrud({
    url: "/project/createpro",
    method: "POST",
    data: { ...input, isPublished: true, userId: user?._id },
    successmsg: "project has been published",
    nav: `/profile/${user?._id}`,
  });

  const { isLoading: savecraftloading, Crud: SaveAsCraft } = useHandleCrud({
    url: "/project/createpro",
    method: "POST",
    data: { ...input, isPublished: false, userId: user?._id },
    successmsg: "project has been saved as craft",
    nav: `/profile/${user?._id}`,
  });

  const HandleContinue = async () => {
    await Crud();
  };

  const HandleSaveasCreaft = async () => {
    await SaveAsCraft();
    // console.log(input)
  };

  return (
    <div className={`${barOpen ? "w-[80%]" : "w-full"} h-screen flex flex-col gap-5 bg-neutral-50`}>
      {/* upload nav*/}
      <div className="w-full flex flex-row items-center justify-between p-6">
        <Button bg="transparent" border="neutral-200" py="py-2" onClick={() => navigate('/home')}>
          cancel
        </Button>
        <div className="flex flex-row gap-5 items-center">
          <Button bg="neutral-100" color="text-black" onClick={HandleSaveasCreaft} isLoading={savecraftloading}>
            save as craft
          </Button>
          <Button onClick={HandleContinue} isLoading={isLoading}>continue</Button>
        </div>
      </div>

      {image ? (
        <div className={`w-full h-screen flex items-center justify-start flex-col gap-5`}>
          <div className="top w-[1050px] flex items-center flex-col gap-3">
            <input
              type="text"
              placeholder="Give me name"
              className="text-4xl w-[70%] font-bold h-[100px] bg-transparent"
              onChange={handlechange}
              name="proTitle"
              value={input.proTitle}
            />
            <img src={image} alt="" className="w-full h-[500px] object-cover rounded-lg" />
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

          {barOpen && (
            <div className={`fixed ${barOpen ? "right-[0%]" : "right-[-30%]"} top-0 h-screen w-[350px] p-8 transition-all duration-300 bg-white shadow-xl flex gap-7 flex-col`}>
              <span onClick={handleBaropen} className="cursor-pointer font-light hover:opacity-50">
                close
              </span>
              <h1 className="text-xl font-bold">Insert Block</h1>
              <div className="flex items-start justify-center flex-col gap-4 ">
                <h2>Basic</h2>
                <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer">
                  <RxText size={25} />
                  <span>Text</span>
                </div>
                <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer">
                  <CiImageOn size={25} />
                  <span>Image</span>
                </div>
                <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer">
                  <GoVideo size={25} />
                  <span>Video</span>
                </div>
              </div>
              <div className="flex items-start justify-center flex-col gap-4 mt-5">
                <h2>Rich media</h2>
                <div className="flex flex-row items-center gap-3 font-light hover:bg-neutral-100 rounded-md p-2 px-3 w-full cursor-pointer">
                  <LuGalleryHorizontal size={20} />
                  <span>Gallery</span>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <ImageUplaod onImage={handleImageChange} />
      )}
    </div>
  );
};

export default Upload;
