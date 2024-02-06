import { memo, useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Button from "../../Components/Button";
import Cards from "../../Components/Cards";
import Title from "../../Components/Title";
import { like, save } from "../../Redux/AuthSlice";
import AxiosRequest from "../../Utils/AxiosRequest";
import useHandleCrud from "../../Utils/HanldeCrud";
import noprofile from '../../assets/noprofile.png';
import saveIcon from '../../assets/save.ico';
import savedIcon from '../../assets/saved.png';
import likeIcon from '../../assets/like.png';
import likedIcon from '../../assets/liked.png';
import Image from "../../Components/Image";
import { FaRegComment } from "react-icons/fa";
import { FiUpload } from "react-icons/fi";
import { BsExclamationCircle } from "react-icons/bs";
import Comment from "./Comment";
import { IoCloseSharp } from "react-icons/io5";
import Toolt from "../../Components/Tooltip";
import { MdOutlineModeEditOutline } from "react-icons/md";
import FooterBtm from "../../Components/FooterBtm";

interface Project {
  _id: string;
  proTitle: string;
  proImage: string;
  userId: string;
  proDesc: string;
  proLink: string;
  projectComments?: any;
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
  const [project, setProject] = useState<Project>({ _id: '', proTitle: '', proImage: '', userId: '', proDesc: "", proLink: '', projectComments: '' });
  const [Copen, setCopen] = useState(false)
  const location = useLocation()
  const proEdit = location.state.proEdit

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
  });

  const handlePorLike = useCallback(async () => {
    try {
      await HandleLike();
      dispatch(like(project?._id));
    } catch (error: any) {
      toast.error("Failed to update like status.");
    }
  }, [HandleLike, dispatch, project?._id]);

  const saved = user?.savedProjects?.includes(project?._id);

  // Handle saved code
  const { Crud: HandleSave } = useHandleCrud({
    url: `/project/saveproject/${project?._id}`,
    method: "POST",
    data: { userId: user?._id },
    successmsg: saved ? "Post has been unSaved" : "Post has been Saved",
  });

  const handleProSave = useCallback(async () => {
    await HandleSave();
    dispatch(save(project?._id));
  }, [HandleSave, dispatch, project?._id]);

  const alreadyfollowed = user?.followed?.includes(project?.userId);

  return (
    <>
      <div className="w-full flex items-center justify-end bg-black h-[40px] text-white px-3 absolute top-0 z-10">
        <IoMdClose size={25} className="text-neutral-300 hover:text-white cursor-pointer" onClick={() => navigate('/home')} />
      </div>
      <div className={`${Copen ? 'w-[75%]' : 'w-full'}  h-screen flex justify-start items-center flex-col`}>
        <Title title={`${project.proTitle}`} />

        <div className="w-full mt-20 flex items-center justify-center bg-white sticky top-[40px] z-10 p-3">
          <div className="w-[1000px] h-[100px] flex flex-col gap-5 ">
            <h1 className="text-2xl font-semibold capitalize">{project?.proTitle}</h1>
            <div className="w-full flex justify-between">
              <div className="flex flex-row gap-5">
                <Image src={postuser?.profilePic || noprofile}
                  imgclass="w-[50px] h-[50px] object-cover rounded-full "
                />
                <div>
                  <Link to={`/profile/${postuser?._id}`} className="text-[15px] font-bold capitalize">{postuser?.username}</Link>
                  <div className="text-[12px] flex items-center flex-row gap-2">
                    {postuser?.available &&
                      <span className="glow"></span>
                    }
                    <p className={postuser?.available ? "text-green-500" : "text-red-500"}>{postuser?.available ? "Available for working" : "not available for work"}</p>
                    <span>{alreadyfollowed ? "follwoing" : "Follow"}</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-row gap-3 items-center ">
                <Button border={"neutral-200"} px="px-3" bg={"transparent"} onClick={handlePorLike}>
                  <Image src={liked ? likedIcon : likeIcon} imgclass="w-[22px] h-[22px] object-cover" />
                </Button>
                <Button border={"neutral-200"} px="px-3" bg={"transparent"} onClick={handleProSave}>
                  <Image src={saved ? savedIcon : saveIcon} imgclass="w-[22px] h-[22px] object-cover" />
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
            <Image src={project?.proImage} imgclass="w-full h-screen rounded-xl shadow-xl" />
            <span className="w-full text-neutral-500 text-xl text-center">{project?.proDesc}</span>
            {project?.proLink &&
              <a className="w-full text-center underline cursor-pointer text-rose-500 font-bold" href={project?.proLink}>{project?.proTitle} Link</a>
            }
          </div>

          {/* about project user */}
          <div className=" w-full h-[3px] bg-neutral-300 relative mt-20">
            <span className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 bg-white">
              <Image src={postuser?.profilePic || noprofile} imgclass="w-[70px] h-[70px] object-cover rounded-full" />
            </span>
          </div>
          <div className="flex items-center justify-center flex-col gap-3 mt-10">
            <Link to={`/profile/${postuser?._id}`} className="text-xl font-bold capitalize">{postuser?.username}</Link>
            <p className="text-neutral-400">designer and developer</p>
            <Button >get on touch</Button>
          </div>

          {/* more deigns */}
          <div className="w-full flex flex-col ">
            <div className="w-full flex justify-between items-center mt-10">
              <p className="font-bold">More by {postuser?.username}</p>
              <Link to={`/profile/${postuser._id}`}>View profile</Link>
            </div>
            <Cards cards={userPublishedProjects} Delete={true} cardlength={4} />
          </div>
        </div>

        <div className={`absolute w-[50px] ${proEdit ? "h-[200px]" : "h-[150px]"}  top-[35%] right-10 flex flex-col items-center justify-between`}>
          <div className="relative" onClick={() => setCopen(!Copen)}>
            <Toolt msg="Feedback" position="left" id="feedback">
              <span className="absolute top-[-5px] right-[-5px] w-[20px] h-[20px] rounded-full text-[10px] border-[1px] border-solid border-neutral-200 bg-white flex items-center justify-center font-bold">{project?.projectComments?.length}</span>
              <Button bg="white" color="black" px="px-3" py="py-3" border="neutral-200"><FaRegComment /></Button>
            </Toolt>
          </div>
          <Toolt msg="Share!" position="left" id="share">
            <Button bg="white" color="black" px="px-3" py="py-3" border="neutral-200"><FiUpload /></Button>
          </Toolt>
          <Toolt msg="Shot details" position="left" id="shoatd">
            <Button bg="white" color="black" px="px-3" py="py-3" border="neutral-200"><BsExclamationCircle /></Button>
          </Toolt>
          {proEdit &&
            <Toolt msg="Edit" position="left" id="edit">
              <Button bg="white" color="black" px="px-3" py="py-3" border="neutral-200" onClick={() => navigate(`/upload/${user?._id}`, { state: { proEdit: project } })}><MdOutlineModeEditOutline /></Button>
            </Toolt>
          }
        </div>

        {
          Copen && (
            <div className={`transition-transform duration-300 transform ${Copen ? 'translate-x-0' : 'translate-x-full'} w-[25%] h-screen fixed right-0 top-0 border-l-[1px] border-solid border-neutral-200 bg-white p-10`}>
              <div className="w-[30px] h-[30px] rounded-full border-[1px] border-solid border-neutral-200 absolute top-[10%] left-[-15px] flex items-center justify-center bg-white cursor-pointer" onClick={() => setCopen(false)}>
                <IoCloseSharp />
              </div>
              <Comment project={project} />
            </div>
          )
        }
        <FooterBtm />
      </div >
    </>
  )
}

export default memo(OpenPro)