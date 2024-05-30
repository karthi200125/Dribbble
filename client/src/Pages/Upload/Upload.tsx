import { useCallback, useState } from "react";
import toast from "react-hot-toast";
import { CiImageOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa";
import { GoVideo } from "react-icons/go";
import { LuGalleryHorizontal } from "react-icons/lu";
import { RxText } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Input from "../../Components/Inputs";
import Title from "../../Components/Title";
import UploadBar from "../../Components/UploadBar";
import useHandleCrud from "../../Utils/HanldeCrud";
import { useUpload } from "../../Utils/UplaodFile";
import ImageUplaod from "./ImageUplaod";
import { createproject } from "../../Redux/AuthSlice";
import Model from "../Model";
import { closeModel, openModel } from "../../Redux/ModelSlice";
import Image from "../../Components/Image";

interface ImageProps {
  imageUrl: string;
  file: {
    name: any;
  };
}

const Upload = () => {
  const location = useLocation()
  const proEdit = location?.state?.proEdit
  const [image, setImage] = useState<ImageProps>(proEdit?.proImage || '');
  const [barOpen, setBarOpen] = useState(false);
  const [cat, setCat] = useState('Discover');
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isOn, setIsOn] = useState(true);
  const [file, setfile] = useState<any>(undefined);
  const { user } = useSelector((state: any) => state.user);

  const [input, setInput] = useState({
    proTitle: proEdit?.proTitle || "",
    proDesc: proEdit?.proDesc || "",
    proImage: proEdit?.proImage || "",
    proLink: "",
  });

  const handleBaropen = useCallback(() => {
    setBarOpen((prevBarOpen) => !prevBarOpen);
  }, []);

  const handlechange = (e: any) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const { UploadFile, donwlaodUrl, per } = useUpload({ image, file })

  const { isLoading, Crud, result } = useHandleCrud({
    url: proEdit ? `/project/updatepro/${proEdit?._id}` : "/project/createpro",
    method: proEdit ? "PUT" : "POST",
    data: { ...input, isPublished: true, userId: user?._id, proImage: donwlaodUrl, category: cat, commentON: isOn ? true : false, proLink: input?.proLink },
    successmsg: proEdit ? "project has been updated" : "project has been published",
  });

  const { isLoading: savecraftloading, Crud: SaveAsCraft } = useHandleCrud({
    url: "/project/createpro",
    method: "POST",
    data: { ...input, isPublished: false, userId: user?._id, proImage: donwlaodUrl, category: cat, commentON: isOn ? true : false, proLink: input?.proLink },
    successmsg: "project has been saved as craft",
  });

  const HandleContinue = async () => {
    await Crud();
    dispatch(closeModel())
    navigate(`/profile/${user?._id}`)
    dispatch(createproject(result?._id))
  };

  const HandleSaveasCreaft = async () => {
    await SaveAsCraft();
    dispatch(closeModel())
    navigate(`/profile/${user?._id}`)
  };

  // select category
  const categories = [
    "Discover",
    "Animation",
    "Branding",
    "Illustration",
    "Mobile",
    "Print",
    "ProductDesign",
    "Typography",
    "WebDesign",
  ];

  // model body cotent
  const bodycontent = (
    <div className="flex flex-row gap-10 items-start">
      <div className="">
        <span className=" font-bold">Thumbnail preview</span>
        <Image src={donwlaodUrl} imgclass="w-[350px] h-[220px] rounded-xl mt-5 shadow-xl" />
      </div>
      <div className="w-full flex flex-col gap-1 ">
        <Input labelname="Tags" placeholder="Add tags..." />
        <span className="text-neutral-400 text-[15px]">Suggested:design,illustration,ui,branding,logo,graphic design,vector,ux,typography,app</span>
        {/* feed back flip */}
        <div className="flex items-center mt-10">
          <span className={`mr-2 w-[220px] font-bold`}>Looking for feedback</span>
          <label className="flex items-center cursor-pointer">
            <div className={`relative w-12 h-6 transition duration-300 ease-in-out ${isOn ? 'bg-rose-200' : 'bg-gray-200'} rounded-full`}>
              <div
                className={`absolute w-6 h-6 transition duration-300 ease-in-out transform ${isOn ? 'translate-x-full' : 'translate-x-0'} ${isOn ? "bg-rose-400" : "bg-gray-400"} rounded-full shadow-md`}
              ></div>
            </div>
            <input type="checkbox" className="hidden" onClick={() => setIsOn(!isOn)} />
          </label>
        </div>
        {/* line */}
        <span className="w-full h-[1px] bg-neutral-200 m-10"></span>
        <div className="w-full flex flex-row items-center justify-between p-2 md:p-6">
          <Button bg="transparent" border="neutral-200" py="py-1 md:py-2" onClick={() => dispatch(closeModel())}>
            cancel
          </Button>
          <div className="flex flex-row gap-5 items-center">
            {!proEdit &&
              <Button bg="neutral-100" color="text-black" onClick={HandleSaveasCreaft} isLoading={savecraftloading} py="py-1 md:py-2">
                save
              </Button>
            }
            <Button onClick={HandleContinue} isLoading={isLoading} py="py-1 md:py-2">continue</Button>
          </div>
        </div>
      </div>
    </div>
  )

  const firstContinue = useCallback(() => {
    if (!input.proTitle) return toast.error("Write Project Title");
    if (!input.proDesc) return toast.error("Write Project Desciption");
    if (proEdit ? "" : !donwlaodUrl) return toast.error(proEdit ? "" : "uplaod Image First");
    dispatch(openModel());
  }, [input.proTitle, input.proDesc, proEdit, donwlaodUrl]);

  const firstSaveasdraft = useCallback(() => {
    dispatch(openModel());
    if (!input.proTitle) return toast.error("Write Project Title");
    if (!input.proDesc) return toast.error("Write Project Desciption");
    if (!donwlaodUrl) return toast.error("uplaod Image First");
  }, [input.proTitle, input.proDesc, donwlaodUrl]);

  return (
    <div className={`${barOpen ? "w-[80%]" : "w-full"} h-screen flex flex-col gap-5 `}>
      <Title title="Dribble Create Project" />
      {/* upload nav*/}
      <div className="w-full flex flex-row items-center justify-between p-2 md:p-6">
        <Button bg="transparent" border="neutral-200" py="py-1 md:py-2" onClick={() => navigate('/home')}>
          cancel
        </Button>
        <div className="flex flex-row gap-5 items-center">
          <Button bg="neutral-100" color="text-black" onClick={firstSaveasdraft} py="py-1 md:py-2">
            save
          </Button>
          <Button onClick={firstContinue} py="py-1 md:py-2">continue</Button>
        </div>
      </div>

      {image ? (
        <div className={`w-full h-full flex items-center justify-start flex-col gap-5`}>
          <div className="top w-full md:w-[1050px] flex items-center flex-col gap-10 p-2 md:p-0">
            <input
              type="text"
              placeholder="Give me name"
              className="text-4xl w-[70%] font-bold h-[100px] bg-transparent"
              onChange={handlechange}
              name="proTitle"
              value={input.proTitle}
            />
            <img src={file ? URL.createObjectURL(file) : image?.imageUrl || proEdit?.proImage} alt="" className="w-full h-[300px] md:h-[500px] object-cover rounded-lg shadow-xl" />
            {proEdit &&
              <>
                <input type="file" id="changeEditImage" className="hidden" onChange={(e: any) => setfile(e.target.files[0])} />
                <label htmlFor="changeEditImage" className="font-bold cursor-pointer">Change Project Image</label>
              </>
            }
            {per ?
              <UploadBar per={per} />
              :
              <Button onClick={UploadFile}> Uplaod Image</Button>
            }
            <Input name="proDesc" labelname="Project Description" placeholder="write what in this design or add any details you like mention" onChange={handlechange} value={input.proDesc} />
            <div className="w-full flex -items-center justify-between flex-row gap-10">
              <Input name="proLink" labelname="Project Link if any" placeholder="Paster Your project link here" onChange={handlechange} value={input.proLink} />
              <select className="w-full h-[60px] mt-8 border-[1px] border-solid border-neutral-200 px-5 rounded-xl focus:border-rose-400" name="cat" id="cat" onChange={(e) => setCat(e.target.value)}>
                <option value="">Select category</option>
                {categories.map((cat: string) => (
                  <option value={cat} key={cat} >{cat}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="relative w-full h-[100px] mt-10">
            <span
              className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-20 py-3 rounded-full flex flex-row gap-3 items-center bg-white border-[1px] border-solid border-neutral-200 cursor-pointer"
              onClick={handleBaropen}
            >
              <FaPlus />
              <span className="hidden md:block">insert Block</span>
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
        <ImageUplaod onImage={(imageUrl: any) => setImage(imageUrl)} />
      )}
      <Model title="Final Touches" subtitle="" bodyContent={bodycontent} w="w-[900px]" />
    </div>
  );
};

export default Upload;
