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
import Title from "../../Components/Title"
import Image from "../../Components/Image"
import Footer from "../../Components/Footer"

const Profile = () => {

  const { user } = useSelector((state: any) => state.user)
  const params = useParams()
  const [Profileuser, setProfileuser] = useState<any>({})
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/account/${user._id}`, { state: { edit: true } })
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

  const alreadyfollowed = user?.followed?.includes(Profileuser?._id);

  // Handle Follow code
  const { Crud: Follow } = useHandleCrud({
    url: `/user/userfollow`,
    method: "POST",
    data: { userId: Profileuser?._id, myid: user?._id },
    successmsg: alreadyfollowed ? "user has been unfollowed" : "user has been followed",
  });

  const handleFollow = async () => {
    await Follow();
    dispatch(followed(Profileuser?._id));
    navigate(`/profile/${Profileuser._id}`)
  };

  return (
    <div className="w-full h-full">
      <Navbar />
      <Title title={`${Profileuser.username} | PixelPulse`} />
      <div className="w-full h-full p-[20px] md:p-20">
        {user?._id === params.id ?
          <div className="h-[300px] md:h-[200px] w-full  flex items-start md:items-center justify-center flex-col md:flex-row gap-10 ">
            <Image src={Profileuser?.profilePic || noprofile} imgclass="w-[100px] md:w-[120px] h-[100px] md:h-[120px] rounded-full " />
            <div className="flex items-start flex-col gap-3 mt-[-30px] md:mt-[0px]">
              <h1 className="text-3xl font-bold capitalize">{Profileuser?.username}</h1>
              <span>{Profileuser?.country}</span>
              <div className="flex flex-row items-center gap-3">
                <Button bg="transparent" border="neutral-200" color="black" onClick={handleClick}>
                  Edit profile
                </Button>
                <Button bg="transparent" border="neutral-200" px="px-3"><IoIosMore /></Button>
              </div>
            </div>
          </div>
          :
          <div className="w-full h-[400px]  flex flex-row justify-between items-center">
            <div className="w-full h-full flex flex-col gap-5">
              <img src={Profileuser.profilePic} alt={Profileuser.username} className="w-[100px] h-[100px] object-cover rounded-full " />
              <h1 className="text-4xl font-bold capitalize">{Profileuser.username}</h1>
              <h1 className="text-5xl font-bold capitalize">{"developer"}</h1>
              <div className="w-full flex flex-row gap-5 items-center">
                <span className="text-lg text-neutral-500">{Profileuser?.followers?.length} followers</span>
                <span className="text-lg text-neutral-500">{Profileuser?.followed?.length} following</span>
              </div>
              <div className="w-full flex flex-row gap-5">
                <Button>Get in Touch</Button>
                <Button py="py-2" bg="transparent" border="neutral-200" onClick={handleFollow}>{alreadyfollowed ? "Following" : "Follow"}</Button>
              </div>
            </div>
          </div>
        }
        <ProfileContents />
      </div>
      <Footer />
    </div>
  )
}

export default Profile