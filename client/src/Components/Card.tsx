import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiHeart, CiShare1 } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { like } from '../Redux/AuthSlice';
import AxiosRequest from "../Utils/AxiosRequest";
import useHandleCrud from "../Utils/HanldeCrud";
import Button from "./Button";

interface CardProps {
  data: {
    _id: string;
    userId: string;
    proImage: string;
    proTitle: string;
    likedUsers?: string[];
  };
  Delete: any;
  profile: any;
}

interface UserData {
  username?: string;
  profilPic?: string;
}

const Card = ({ data, Delete, profile }: CardProps) => {
  const { user } = useSelector((state: any) => state.user);
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const [postuser, setPostuser] = useState<UserData>({});

  // Delete Project
  const { Crud } = useHandleCrud({
    url: `/project/deletepro/${data?._id}`,
    method: "DELETE",
    data: { userId: user?._id },
    successmsg: "Project has been deleted successfully"
  });

  const HanldeDeleteDraft = async () => {
    await Crud();
  };

  // Fetch the user details
  const getUser = async () => {
    try {
      const res = await AxiosRequest.get<UserData>(`/user/getuser/${data?.userId}`);
      setPostuser(res?.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };
  
  useEffect(() => {
    getUser();
  }, []);

  const liked = user?.likedProjects?.includes(data?._id);

  // Handle like code
  const { Crud: HandleLike } = useHandleCrud({
    url: `/project/likeproject/${data?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: liked ? "Post has been Disliked" : "Post has been liked",
    nav: '/home'
  });

  const handlePorLike = async () => {
    await HandleLike();
    dispatch(like(data?._id));
  };

  return (
    <div className="card" >
      <Link to={`/openpro/${data._id}`} state={{ ...data, postuser: postuser }} className="group imagecon h-[210px] overflow-hidden rounded-lg relative cursor-pointer">
        <img
          src={data.proImage}
          alt={data.proTitle}
          className="w-full h-full object-cover rounded-lg"
        />
        <div className="hidden group-hover:flex absolute bg-gradient-to-b from-[rgba(0,0,0,0.005)] to-[rgba(0,0,0,0.7)] bottom-0 left-0 w-full items-center justify-between h-20 p-4 transition duration-300 ease-in-out">
          <h1 className="w-[65%] text-white text-[20px] font-bold cursor-pointer whitespace-nowrap pr-3">
            {data.proTitle}
          </h1>
          {!Delete &&
            <Button bg="white" border="neutral-200" px="px-3" color="black">
              <CiShare1 size={20} />
            </Button>
          }
          {!Delete &&
            <Button
              bg={liked ? "red-300" : "white"}
              border={liked ? "red-300" : "neutral-200"}
              px="px-3"
              color={liked ? "text-red-500" : "black"}
              onClick={handlePorLike}
            >
              <CiHeart size={20} />
            </Button>
          }
        </div>
      </Link>
      {!Delete &&
        <>
          {pathname !== '/openpro/4' &&
            <div className="flex items-center flex-row justify-between p-2">
              <div className="flex items-center flex-row gap-2 cursor-pointer">
                <img
                  src={postuser?.profilPic}
                  alt=""
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <span>{postuser?.username}</span>
                <div className="bg-[rgba(0,0,0,0.25)] text-white rounded-[5px] h-4 px-1 flex items-center justify-center text-[12px]">pro</div>
              </div>
              <div className="flex items-center justify-between flex-row gap-2 text-neutral-400">
                <div className="flex items-center flex-row gap-1">
                  <FaHeart className="cursor-pointer hover:text-red-400 transition" />
                  <p className="text-[12px]">{data?.likedUsers?.length}</p>
                </div>
                <div className="flex items-center flex-row gap-1">
                  <IoEyeSharp />
                  <p className="text-[12px]">{"10"}</p>
                </div>
              </div>
            </div>
          }
        </>
      }
      {Delete &&
        <div className="w-full text-end text-neutral-600 cursor-pointer p-4 hover:text-red-500" onClickCapture={HanldeDeleteDraft}>Delete</div>
      }
    </div >
  );
};

export default memo(Card);
