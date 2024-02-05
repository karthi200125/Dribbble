import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { like, save } from '../Redux/AuthSlice';
import AxiosRequest from "../Utils/AxiosRequest";
import useHandleCrud from "../Utils/HanldeCrud";
import likeIcon from '../assets/like.png';
import likedIcon from '../assets/liked.png';
import noprofile from '../assets/noprofile.png';
import saveIcon from '../assets/save.ico';
import savedIcon from '../assets/saved.png';
import Button from "./Button";
import Image from "./Image";

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
  _id?: string;
  profilePic?: string;
}

const Card = ({ data, Delete, profile }: CardProps) => {
  const { user } = useSelector((state: any) => state.user);
  const location = useLocation();
  const pathname = location.pathname;
  const params = useParams()
  const dispatch = useDispatch();
  const [postuser, setPostuser] = useState<UserData>({});
  const navigate = useNavigate()

  // Delete Project
  const { result, Crud } = useHandleCrud({
    url: `/project/deletepro/${data?._id}`,
    method: "DELETE",
    data: { userId: user?._id },
    successmsg: "Project has been deleted successfully"
  });

  const HanldeDeleteDraft = async (e: any) => {
    e.stopPropagation()
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

  const [count, setCount] = useState(data?.likedUsers?.length);

  const LikeCount = () => {
    setCount((prevCount: any) => (liked ? prevCount - 1 : prevCount + 1));
  };

  const liked = user?.likedProjects?.includes(data?._id);

  // Handle like code
  const { Crud: HandleLike } = useHandleCrud({
    url: `/project/likeproject/${data?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: liked ? "Post has been Disliked" : "Post has been liked",
  });

  const handlePorLike = async (e: any) => {
    e.stopPropagation()
    await HandleLike();
    LikeCount()
    dispatch(like(data?._id));
  };

  const saved = user?.savedProjects?.includes(data?._id);

  // Handle saved code
  const { Crud: HandleSave } = useHandleCrud({
    url: `/project/saveproject/${data?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: liked ? "Post has been unSaved" : "Post has been Saved",
  });

  const handleProSave = async (e: any) => {
    e.stopPropagation()
    await HandleSave();
    dispatch(save(data?._id));
  };

  const cardClick = () => {
    navigate(`/openpro/${data._id}`, { state: { ...data, postuser: postuser } })
  }

  return (
    <div className="card " >
      <div className="group imagecon h-[210px] overflow-hidden rounded-lg relative cursor-pointer" onClick={cardClick}>
        <Image
          src={data.proImage || noprofile}
          imgclass="object-cover rounded-lg h-[210px] w-full"
        />

        <div className="hidden group-hover:flex absolute bg-gradient-to-b from-[rgba(0,0,0,0.005)] to-[rgba(0,0,0,0.7)] bottom-0 left-0 w-full items-center justify-between h-20 p-4 transition duration-300 ease-in-out gap-2">
          <h1 className="overflow-hidden w-[60%] text-white text-[20px] font-bold cursor-pointer" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
            {data?.proTitle}
          </h1>
          {!profile === true &&
            <div className="flex items-center gap-1">
              {!Delete &&
                <Button bg={"white"} border={"neutral-200"} px="px-2" py="py-2" color={saved ? "text-red-500" : "black"} onClick={handleProSave}>
                  <img src={saved ? savedIcon : saveIcon} alt="" className="w-[20px] h-[20px] object-cover" />
                </Button>
              }
              {!Delete &&
                <Button bg={"white"} border={"neutral-200"} px="px-2" py="py-2" color={liked ? "text-red-500" : "black"} onClick={handlePorLike}>
                  <img src={liked ? likedIcon : likeIcon} alt="" className="w-[20px] h-[20px] object-cover" />
                </Button>
              }
            </div>
          }
        </div>

      </div>
      {!Delete &&
        <>
          {pathname !== `/openpro/${data?._id}` &&
            <div className="flex items-center flex-row justify-between p-2">
              <Link to={`/profile/${postuser?._id}`} className="flex items-center flex-row gap-2 cursor-pointer">
                <img
                  src={postuser?.profilePic}
                  alt={postuser?.username}
                  loading="lazy"
                  className="w-[30px] h-[30px] rounded-full object-cover"
                />
                <span className="overflow-hidden" style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                  {postuser?.username}
                </span>
                <div className="bg-[rgba(0,0,0,0.25)] text-white rounded-[5px] h-4 px-1 flex items-center justify-center text-[12px]">pro</div>
              </Link>
              <div className="flex items-center justify-between flex-row gap-2 text-neutral-400">
                <div className="flex items-center flex-row gap-1">
                  <FaHeart className={`cursor-pointer ${liked && "text-red-400"} hover:text-red-400 transition`} />
                  <p className="text-[12px]">{count}</p>
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
      {Delete && (params.id === user?._id) &&
        <div className="w-full text-end text-neutral-600 cursor-pointer p-4 hover:text-red-500" onClickCapture={HanldeDeleteDraft}>Delete</div>
      }
    </div >
  );
};

export default memo(Card);
