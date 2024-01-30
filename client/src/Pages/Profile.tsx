import { useNavigate } from "react-router-dom"
import Button from "../Components/Button"
import Navbar from "../Components/Navbar"
import noprofile from '../assets/noprofile.png'

const Profile = () => {

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/account/123')
  }

  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="w-full h-screen p-20">
        <div className="h-[200px] w-full  flex items-center justify-center flex-row gap-10">
          <img src={"https://cdn.dribbble.com/users/17579883/avatars/normal/0e6cb604f97f1d9236d3089156e7121f.jpg?1695134966" || noprofile} alt="" className="w-[120px] h-[120px] object-cover rounded-full" />
          <div className="flex items-start flex-col gap-3">
            <h1 className="text-3xl font-bold">karthikeyan</h1>
            <span>india</span>
            <div className="flex flex-row items-center">
              <Button title="Edit profile" bg="transparent" border="neutral-200" color="black" onClick={handleClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile