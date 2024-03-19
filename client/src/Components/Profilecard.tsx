import { Link, useNavigate } from "react-router-dom"
import noProfile from '../assets/noprofile.png'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from "../Redux/AuthSlice"
import Image from "./Image"

const Profilecard = () => {

  const { user } = useSelector((state: any) => state.user)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogout = () => {
    navigate('/')
    dispatch(logout())
  }

  return (
    <div className="hover:visibility-visible w-full h-full flex flex-col items-center justify-between p-10 rounded-[20px] bg-white">
      <Link to={`/profile/${user?._id}`} className="flex items-center justify-center flex-col">
        <Image src={user.profilePic || noProfile} imgclass="rounded-full mb-2 w-[80px] h-[80px]" />
        <span className="font-bold capitalize">{user?.username}</span>
      </Link>
      <div className=" w-full flex items-start justify-center flex-col  gap-4 ">
        <Link to={`/upload/${user?._id}`} className="cursor-pointer hover:opacity-80 text-neutral-700">Upload design work</Link>
        <Link to='/home' className="cursor-pointer hover:opacity-80 text-neutral-700">Work preferences</Link>
        <Link to={`/account/${user?._id}`} className="cursor-pointer hover:opacity-80 text-neutral-700">Settings</Link>
        <span className="h-[1px] bg-neutral-300 w-full"></span>
        <span className="cursor-pointer hover:opacity-80 text-neutral-700" onClick={handleLogout}>Sign Out</span>
      </div>
    </div >
  )
}

export default Profilecard