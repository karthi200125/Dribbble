import { Link } from "react-router-dom"
import Profilecard from "./Profilecard"
import noProfile from '../assets/noprofile.png'

const User = () => {
    return (
        <Link to="/profile/123" className="w-[50px] h-[50px] group relative cursor-pointer">
            <img src={"" || noProfile} alt="" className="w-full h-full object-cover rounded-full" />
            <div className="hidden group-hover:block absolute w-[320px] h-[370px] boxshadow-md right-0 top-20 rounded-[20px] border-[1px] border-solid border-neutral-200 transition-all duration-300 ease-in-out">
                <Profilecard />
            </div>
        </Link>
    )
}

export default User