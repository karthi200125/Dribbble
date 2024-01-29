import { Link } from "react-router-dom"
import noProfile from '../assets/noprofile.png'

const Profilecard = () => {

  const handleLogout = () => [

  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-between p-10 z-10 bg-white">
      <div className="flex items-center justify-center flex-col">
        <img src={"" || noProfile} alt=""
          className="w-[80px] h-[80px] object-cover rounded-full mb-2" />
        <span>karthikeyan</span>
      </div>
      <div className=" w-full flex items-start justify-center flex-col  gap-4">
        <Link to='/' className="cursor-pointer hover:opacity-80 text-neutral-700">Upload design work</Link>
        <Link to='/' className="cursor-pointer hover:opacity-80 text-neutral-700">Work preferences</Link>
        <Link to='/' className="cursor-pointer hover:opacity-80 text-neutral-700">Settings</Link>
        <span className="h-[1px] bg-neutral-300 w-full"></span>
        <span className="cursor-pointer hover:opacity-80 text-neutral-700" onClick={handleLogout}>Sign Out</span>
      </div>
    </div>
  )
}

export default Profilecard