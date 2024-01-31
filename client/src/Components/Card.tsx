import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { CiShare1, CiHeart } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import Button from "./Button";
import { memo } from "react";

interface CardProps {
  data: {};
}


const Card = ({ data }: CardProps) => {

  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Link to={`/openpro/${data.id}`} className="card " state={data}>
      <div className=" group imagecon h-[210px] overflow-hidden rounded-[10px] relative cursor-pointer">
        <img
          src={data.proImage}
          alt={data.proTitle}
          className="w-full h-full object-cover"
        />
        <div className="hidden group-hover:flex absolute bg-gradient-to-b from-[rgba(0,0,0,0.005)] to-[rgba(0,0,0,0.7)] bottom-0 left-0 w-full items-center justify-between h-20 p-4 transition duration-300 ease-in-out">
          <h1 className="w-[65%] text-white text-[20px] font-bold cursor-pointer whitespace-nowrap pr-3">
            {data.proTitle}
          </h1>
          <Button bg="white" border="neutral-200" px="px-3" color="black">
            <CiShare1 size={20} />
          </Button>
          <Button bg="white" border="neutral-200" px="px-3" color="black">
            <CiHeart size={20} />
          </Button>
        </div>
      </div>
      {!pathname !== '/openpro/4' &&
        <div className="flex items-center flex-row justify-between p-2">
          <div className="flex items-center flex-row gap-2 cursor-pointer">
            <img
              src={data.userPro}
              alt=""
              className="w-[30px] h-[30px] rounded-full object-cover"
            />
            <span>{data.username}</span>
            <div className="bg-[rgba(0,0,0,0.25)]  text-white rounded-[5px] h-4 px-1 flex items-center justify-center text-[12px]">pro</div>
          </div>
          <div className="flex items-center justify-between flex-row gap-2 text-neutral-400">
            <div className="flex items-center flex-row gap-1">
              <FaHeart className="cursor-pointer hover:text-red-400 transition" />
              <p className="text-[12px]">{data.proLikes}</p>
            </div>
            <div className="flex items-center flex-row gap-1">
              <IoEyeSharp />
              <p className="text-[12px]">{data.proViews}</p>
            </div>
          </div>
        </div>
      }
    </Link>
  );
};

export default memo(Card);
