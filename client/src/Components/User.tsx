import { Link } from "react-router-dom"
import Profilecard from "./Profilecard"
import noProfile from '../assets/noprofile.png'
import { useSelector } from "react-redux"
import Image from "./Image"
import { memo } from "react"

const User = () => {

    const { user } = useSelector((state: any) => state.user)

    return (
        <Link to={`/profile/${user?._id}`} className="w-[50px] h-[50px] group relative cursor-pointer">
            <Image src={user.profilePic || noProfile} imgclass="rounded-full h-full w-full" />
            <div className="hidden group-hover:block absolute w-[320px] h-[370px] boxshadow-md right-0 top-[52px] rounded-[20px] border-[1px] border-solid border-neutral-200 transition-all duration-300 ease-in-out z-10">
                <Profilecard />
            </div>
        </Link>
    )
}

export default memo(User)