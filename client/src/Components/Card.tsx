import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";

interface CardProps {
  data: {};
}

const Card = ({ data }: CardProps) => {

  return (
    <div className="card">
      <div className="w-[280px] h-[200px] overflow-hidden rounded-[10px]">
        <img src="https://images.pexels.com/photos/17652903/pexels-photo-17652903/free-photo-of-naomi.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          className=" group w-full h-full object-cover "
        />
        <div className="imgcontent">
          <h1>pro title</h1>
          
        </div>
      </div>
      <div className="flex items-center flex-row justify-between p-2">
        <div className="flex items-center flex-row gap-2">
          <img src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-[30px] h-[30px] rounded-full object-cover" />
          <span>username</span>
        </div>
        <div className="flex items-center justify-between flex-row gap-2 text-neutral-400">
          <div className="flex items-center flex-row gap-2">
            <FaHeart className="cursor-pointer hover:text-red-400 transition" />
            <p>100</p>
          </div>
          <div className="flex items-center flex-row gap-2">
            <IoEyeSharp />
            <p>100k</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card