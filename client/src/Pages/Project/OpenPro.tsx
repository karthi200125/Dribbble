import { memo, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { CiHeart } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";
import { like, save } from "../../Redux/AuthSlice";
import AxiosRequest from "../../Utils/AxiosRequest";
import useHandleCrud from "../../Utils/HanldeCrud";
import noprofile from '../../assets/noprofile.png';
import saveIcon from '../../assets/save.ico';
import savedIcon from '../../assets/saved.png';
import Title from "../../Components/Title";

interface Project {
  _id: string;
  proTitle: string;
  proImage: string;
  userId: string;
}

interface User {
  _id: string;
  username: string;
  profilePic?: string;
  available?: boolean;
}

const OpenPro = () => {
  const { user } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  const [postuser, setPostuser] = useState<User>({ _id: '', username: '' });
  const [project, setProject] = useState<Project>({ _id: '', proTitle: '', proImage: '', userId: '' });

  const [Allprojects, setAllprojects] = useState<Project[]>([]);

  // Fetch the project details
  const getProject = async () => {
    try {
      const res = await AxiosRequest.get<Project>(`/project/getpro/${params.id}`);
      setProject(res?.data);
    } catch (error: any) {
      console.log(error)
    }
  };

  // Fetch the user details
  const getUser = async () => {
    try {
      const res = await AxiosRequest.get<User>(`/user/getuser/${project.userId}`);
      setPostuser(res?.data);
    } catch (error: any) {
      console.log(error)
    }
  };


  // Fetch postuser projects 
  const getAllProject = async () => {
    try {
      const res = await AxiosRequest.post<Project[]>(`/project/getallpro`, { userId: postuser?._id });
      setAllprojects(res?.data);
    } catch (error: any) {
      console.log(error)
    }
  };

  const userPublishedProjects = Allprojects.filter((pro: any) => pro.isPublished === true)

  useEffect(() => {
    getUser();
    getProject();
    getAllProject();
  }, [user?._id, params.id, project, postuser?._id]);

  const liked = user?.likedProjects?.includes(project?._id);

  const { Crud: HandleLike } = useHandleCrud({
    url: `/project/likeproject/${project?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: liked ? "Post has been Disliked" : "Post has been liked",
    nav: `/openpro/${project?._id}`
  });

  const handlePorLike = async () => {
    try {
      await HandleLike();
      dispatch(like(project?._id));
    } catch (error: any) {
      toast.error("Failed to update like status.");
    }
  };

  const saved = user?.savedProjects?.includes(project?._id);

  // Handle saved code
  const { Crud: HandleSave } = useHandleCrud({
    url: `/project/saveproject/${project?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: liked ? "Post has been unSaved" : "Post has been Saved",
    nav: `/openpro/${project._id}`
  });

  const handleProSave = async () => {
    await HandleSave();
    dispatch(save(project?._id));
  };

  return (
    <div className="w-full h-screen flex justify-start items-center flex-col">
      <Title title={`${project.proTitle}`} />
      <div className="w-full flex items-center justify-end bg-black h-[40px] text-white px-3 absolute top-0 z-10">
        <IoMdClose size={25} className="text-neutral-300 hover:text-white cursor-pointer" onClick={() => navigate('/home')} />
      </div>

      <div className="w-full mt-20 flex items-center justify-center bg-white sticky top-[40px] z-10 p-3">
        <div className="w-[1000px] h-[100px] flex flex-col gap-5 ">
          <h1 className="text-2xl font-semibold capitalize">{project?.proTitle}</h1>
          <div className="w-full flex justify-between">
            <div className="flex flex-row gap-5">
              <img src={postuser?.profilePic || noprofile}
                alt=""
                className="w-[50px] h-[50px] object-contain rounded-full"
              />
              <div>
                <span className="text-[15px] font-bold capitalize">{postuser?.username}</span>
                <div className="text-[12px] flex items-center flex-row gap-2">
                  {postuser?.available &&
                    <span className="glow"></span>
                  }
                  <p className={postuser?.available ? "text-green-500" : "text-red-500"}>{postuser?.available ? "Available for working" : "not available for work"}</p>
                  <span>follwoing</span>
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center ">
              <Button border={liked ? "red-300" : "neutral-200"} px="px-3" bg={liked ? "red-300" : "transparent"} onClick={handlePorLike}>
                <CiHeart size={20} />
              </Button>
              <Button border={saved ? "red-300" : "neutral-200"} px="px-3" bg={saved ? "red-300" : "transparent"} onClick={handleProSave}>
                <img src={saved ? savedIcon : saveIcon} alt="" className="w-[22px] h-[22px] object-cover" />
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
          <img src={project?.proImage} alt="" className="w-full h-screen rounded-xl" />
        </div>

        {/* about project user */}
        <div className=" w-full h-[3px] bg-neutral-300 relative mt-20">
          <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
            <img src={postuser?.profilePic || noprofile} alt=""
              className="w-[70px] h-[70px] object-contain rounded-full"
            />
          </span>
        </div>
        <div className="flex items-center justify-center flex-col gap-3 mt-10">
          <h1 className="text-xl font-bold capitalize">{postuser?.username}</h1>
          <p className="text-neutral-400">designer and developer</p>
          <Button >get on touch</Button>
        </div>

        {/* more deigns */}
        <div className="w-full flex flex-col ">
          <div className="w-full flex justify-between items-center mt-10">
            <p className="font-bold">More by {postuser?.username}</p>
            <Link to={`/profile/${postuser._id}`}>View profile</Link>
          </div>
          <Cards cards={userPublishedProjects} />
        </div>
      </div>

    </div>
  )
}

export default memo(OpenPro)