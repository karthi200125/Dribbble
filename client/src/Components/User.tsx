import { Link } from "react-router-dom"
import Profilecard from "./Profilecard"
import noProfile from '../assets/noprofile.png'
import { useSelector } from "react-redux"

const User = () => {

    const { user } = useSelector((state: any) => state.user)

    return (
        <Link to={`/profile/${user?._id}`} className="w-[50px] h-[50px] group relative cursor-pointer">
            <img src={"" || noProfile} alt="" className="w-full h-full object-cover rounded-full" />
            <div className="hidden group-hover:block absolute w-[320px] h-[370px] boxshadow-md right-0 top-[52px] rounded-[20px] border-[1px] border-solid border-neutral-200 transition-all duration-300 ease-in-out">
                <Profilecard />
            </div>
        </Link>
    )
}

export default User