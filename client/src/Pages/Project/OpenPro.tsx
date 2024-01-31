import { CiHeart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { IoSaveOutline } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";
import noprofile from '../../assets/noprofile.png';
import { CARDS } from "../../Cardsdata";
import { memo } from "react";


const OpenPro = () => {

  const navigate = useNavigate()
  const location = useLocation()
  const data = location.state

  return (
    <div className="w-full h-screen flex justify-start items-center flex-col">

      <div className="w-full flex items-center justify-end bg-black h-[40px] text-white px-3 absolute top-0 z-10">
        <IoMdClose size={25} className="text-neutral-300 hover:text-white cursor-pointer" onClick={() => navigate('/home')} />
      </div>

      <div className="w-full mt-20 flex items-center justify-center bg-white sticky top-[40px] z-10 p-3">
        <div className="w-[1000px] h-[100px] flex flex-col gap-5 ">
          <h1 className="text-2xl font-semibold">{data.proTitle}</h1>
          <div className="w-full flex justify-between">
            <div className="flex flex-row gap-5">
              <img src={data.userPro || noprofile}
                alt=""
                className="w-[50px] h-[50px] object-cover rounded-full"
              />
              <div>
                <span className="text-[15px] font-bold">{data.username}</span>
                <div className="text-[12px] flex items-center flex-row gap-2">
                  <span className="glow"></span>
                  <p className="text-green-500">Available for working</p>
                  <span>follwoing</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center ">
              <Button bg="transparent" border="neutral-200" px="px-3">
                <CiHeart size={20} />
              </Button>
              <Button bg="transparent" border="neutral-200" px="px-3">
                <IoSaveOutline size={20} />
              </Button>
              <Button py="py-2">get in touch</Button>
            </div>
          </div>
        </div>
      </div>

      {/* display projects image , video and text */}
      <div className="w-[1200px] mt-20 flex flex-col gap-5 items-center justify-center">

        {/* display contents */}
        <div className="w-[1000px] h-full flex flex-col gap-10">
          <img src={data.proImage} alt="" className="w-full h-screen rounded-xl" />
        </div>

        {/* about project user */}
        <div className=" w-full h-[3px] bg-neutral-300 relative mt-20">
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
            <img src={data.userPro || noprofile} alt=""
              className="w-[70px] h-[70px] object-cover rounded-full"
            />
          </span>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-10">
          <h1 className="text-xl font-bold">karthikeyan</h1>
          <p className="text-neutral-400">designer and developer</p>
          <Button >get on touch</Button>
        </div>

        {/* more deigns */}
        <div className="flex flex-col ">
          <div className="w-full flex justify-between items-center mt-10">
            <p className="font-bold">More by alesha design</p>
            <Link to='/profile/123'>View profile</Link>
          </div>
          <Cards cards={CARDS} />
        </div>
      </div>

    </div>
  )
}

export default memo(OpenPro)