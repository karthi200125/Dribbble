import { IoMdClose } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { IoSaveOutline } from "react-icons/io5";
import Button from "../Components/Button";
import Cards from "../Components/Cards";
import { Link, useNavigate } from "react-router-dom";

const OpenPro = () => {

  const cards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
  ]

  const navigate = useNavigate()

  return (
    <div className="w-full h-screen flex justify-start items-center flex-col">

      <div className="w-full flex items-center justify-end bg-black h-[40px] text-white px-3">
        <IoMdClose size={25} className="text-neutral-300 hover:text-white cursor-pointer" onClick={() => navigate('/home')} />
      </div>

      <div className="w-[1000px] mt-20 flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Personal Loader + Fake3D WebGL</h1>
        <div className="w-full flex justify-between">
          <div className="flex flex-row gap-5">
            <img src="https://cdn.dribbble.com/users/432077/avatars/small/111c79d914406def8805c25ab298a1d4.jpg?1706480230"
              alt=""
              className="w-[50px] h-[50px] object-cover rounded-full"
            />
            <div>
              <span className="text-[15px] font-bold">karthkeyan</span>
              <p className="text-[12px]">follwoing</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 items-center ">
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-solid border-neutral-200 flex items-center justify-center cursor-pointer">
              <CiHeart size={20} />
            </div>
            <div className="w-[40px] h-[40px] rounded-full border-[1px] border-solid border-neutral-200 flex items-center justify-center cursor-pointer">
              <IoSaveOutline size={20} />
            </div>
            <Button title="get in touch" py="py-2" />
          </div>
        </div>
      </div>

      <div className="w-[1200px] mt-20 flex flex-col gap-5">
        <div className=" w-full h-[3px] bg-neutral-300 relative">
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
            <img src="https://cdn.dribbble.com/users/3779879/avatars/small/a292fc1d56a499ec34a745b154929a18.png?1616993029" alt=""
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
          </span>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-10">
          <h1 className="text-xl font-bold">karthikeyan</h1>
          <p className="text-neutral-400">designer and developer</p>
          <Button title="get on touch" />
        </div>
        {/* more deigns */}
        <div className="flex flex-col ">
          <div className="w-full flex justify-between items-center mt-10">
            <p className="font-bold">More by alesha design</p>
            <Link to='/profile/123'>View profile</Link>
          </div>
          <Cards cards={cards} />
        </div>
      </div>

    </div>
  )
}

export default OpenPro