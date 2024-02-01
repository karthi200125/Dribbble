import { useNavigate, useParams } from "react-router-dom"
import noprofile from '../../assets/noprofile.png'
import { useDispatch, useSelector } from "react-redux"
import Navbar from "../../Components/Navbar"
import Button from "../../Components/Button"
import ProfileContents from "./ProfileContents"
import { IoIosMore } from "react-icons/io"
import AxiosRequest from "../../Utils/AxiosRequest"
import { useEffect, useState } from "react"
import toast from "react-hot-toast"
import useHandleCrud from "../../Utils/HanldeCrud"
import { followed } from "../../Redux/AuthSlice"

interface ProfileProps {
  _id: string;
  username: string;
  profilePic: string;
  userTitle: string;
  followers: string;
  followed: string;
}

const Profile = () => {

  const { user } = useSelector((state: any) => state.user)
  const params = useParams()
  const [Profileuser, setProfileuser] = useState<ProfileProps>({})
  const dispatch = useDispatch()

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/account/${user._id}`)
  }

  // Fetch the user details
  const getUser = async () => {
    try {
      const res = await AxiosRequest.get(`/user/getuser/${params.id}`);
      setProfileuser(res?.data);
    } catch (error: any) {
      toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    getUser();
  }, [params]);

  const followed = user?.followed?.includes(Profileuser?._id);

  // Handle like code
  const { Crud: Follow } = useHandleCrud({
    url: `/user/userfollow`,
    method: "POST",
    data: { userId: Profileuser?._id, myid: user?._id },
    successmsg: followed ? "user has been unfollowed" : "user has been followed",
    nav: `/profile/${Profileuser._id}`
  });

  const handleFollow = async () => {
    await Follow();
    dispatch(followed(Profileuser?._id));
  };



  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-full p-20">
        {user?._id === params.id ?
          <div className="h-[200px] w-full  flex items-center justify-center flex-row gap-10">
            <img src={Profileuser?.profilePic || noprofile} alt="" className="w-[120px] h-[120px] object-cover rounded-full" />
            <div className="flex items-start flex-col gap-3">
              <h1 className="text-3xl font-bold">{Profileuser?.username}</h1>
              <span>india</span>
              <div className="flex flex-row items-center gap-3">
                <Button bg="transparent" border="neutral-200" color="black" onClick={handleClick}>
                  Edit profile
                </Button>
                <Button bg="transparent" border="neutral-200" px="px-3"><IoIosMore /></Button>
              </div>
            </div>
          </div>
          :
          <div className="w-full h-[400px]  flex flex-col gap-5">
            <img src={Profileuser.profilePic} alt={Profileuser.username} className="w-[100px] h-[100px] object-cover rounded-full bg-green-400" />
            <h1 className="text-4xl font-bold capitalize">{Profileuser.username}</h1>
            <h1 className="text-5xl font-bold capitalize">{"developer"}</h1>
            <div className="w-full flex flex-row gap-5 items-center">
              <span className="text-lg text-neutral-500">{Profileuser.followers} followers</span>
              <span className="text-lg text-neutral-500">{Profileuser.followed} following</span>
            </div>
            <div className="w-full flex flex-row gap-5">
              <Button>Get in Touch</Button>
              <Button py="py-2" bg="transparent" border="neutral-200" onClick={handleFollow}>{followed ? "Following" : "Follow"}</Button>
              <Button py="py-2" bg="transparent" border="neutral-200" px="px-4"><IoIosMore /></Button>
            </div>
          </div>
        }
        <ProfileContents />
      </div>

    </div>
  )
}

export default Profile